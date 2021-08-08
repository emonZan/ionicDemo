import { Base64 } from '@ionic-native/base64/ngx';
import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

import { DataService } from '../services/data.service';
import { PhotoService } from '../services/photo.service';
import { UploadImageRequest, UploadService } from '../services/upload.service';

@Component({
  selector: 'app-check-server',
  templateUrl: 'check-server.page.html',
  styleUrls: ['check-server.page.scss'],
  providers: [UploadService]
})
export class CheckServerPage implements OnInit {
  enableUpload = false;
  serverInfo: any;
  constructor(private uploadService: UploadService,
    private camera: Camera,
    private base64: Base64,
    private dataService: DataService) { }

  ngOnInit() {
    this.serverInfo = this.dataService.getData('serverInfo');
  }
  checkServerStatus() {
    this.uploadService.checkServerStatus().subscribe(resp => {
      if (resp.status === 'ok') {
        this.enableUpload = true;
      }
      console.log(resp);
    });
  }

  takePhtoto() {
    const options: CameraOptions = {
      quality: 10,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    }

    this.camera.getPicture(options).then((imageData) => {
      console.log('imageData', imageData);
      // imageData is either a base64 encoded string or a file URI
    }, (err) => {
      // Handle error
    });
  }


  private encodeAsBase64(filePath) {
    console.log('bas', filePath);
    this.base64.encodeFile(filePath).then((base64File: string) => {
      // If it's base64 (DATA_URL):
      const base64Image = 'data:image/jpeg;base64,' + base64File;
      const request: UploadImageRequest = {
        picture: base64Image
      };
    }, (err) => {
    });
  }
}


