import { Base64 } from '@ionic-native/base64/ngx';
import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Router } from '@angular/router';
import { ImageResizer, ImageResizerOptions } from '@ionic-native/image-resizer/ngx';

import { DataService } from '../services/data.service';
import { UploadImageRequest, UploadService } from '../services/upload.service';

@Component({
  selector: 'app-check-server',
  templateUrl: 'check-server.page.html',
  styleUrls: ['check-server.page.scss'],
  providers: [UploadService]
})
export class CheckServerPage{
  enableUpload = false;
  constructor(private uploadService: UploadService,
    private camera: Camera,
    private base64: Base64,
    private dataService: DataService,
    private router: Router,
    private imageResizer: ImageResizer) { }

  checkServerStatus() {
    this.uploadService.checkServerStatus().subscribe(resp => {
      if (resp.status === 'ok') {
        this.enableUpload = true;
      }
    }, err => {
      // TODO: Handle error
      console.log(err);
    });
  }

  takePhtoto() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE,
    }
    this.camera.getPicture(options).then((imageData) => {
      // resize image
      const options1 = {
        uri: imageData,
        folderName: 'pictures',
        quality: 50,
        width: 1280,
        height: 1280
      } as ImageResizerOptions;
      this.imageResizer
        .resize(options1)
        .then((filePath: string) => {
          // base64 encode image
          this.encodeImage(filePath);
        })
        .catch(e => console.log(e));
    }, (err) => {
      // TODO: Handle error
      console.log(err);
    });
  }

  private encodeImage(resizedImageFilePath: string) {
    this.base64.encodeFile(resizedImageFilePath)
      .then((resizedImageBase64Str: string) => {
        // upload image
        this.uploadImage(resizedImageBase64Str);
      }, (err) => {
        // TODO: Handle error
        console.log(err);
      });
  }
  private uploadImage(imageBase64Str: string) {
    const request: UploadImageRequest = {
      picture: imageBase64Str
    };
    this.uploadService.uploadImage(request).subscribe(data => {
      this.dataService.saveData('imageUrl', data.file);
      this.router.navigateByUrl('/summary');
    }, err => {
      // TODO: Handle error
      console.log('err', err);
    });
  }
}


