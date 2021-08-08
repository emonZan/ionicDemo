import { Component } from '@angular/core';
import { UploadImageRequest, UploadService } from '../services/upload.service';
import { PhotoService } from '../services/photo.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { CameraPhoto } from '@capacitor/camera/dist/esm/definitions';
import { Base64 } from '@ionic-native/base64/ngx';

@Component({
  selector: 'app-check-server',
  templateUrl: 'check-server.page.html',
  styleUrls: ['check-server.page.scss'],
  providers: [UploadService, PhotoService]
})
export class CheckServerPage {
  enableUpload = true;
  constructor(private uploadService: UploadService,
    public photoService: PhotoService, private camera: Camera,
    private base64: Base64) { }

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
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    }

    
    this.camera.getPicture(options).then((imageData) => {
      console.log('0');
      const test = this.readAsBase64(imageData);
      console.log('test',test);
      // imageData is either a base64 encoded string or a file URI
    }, (err) => {
      console.log(3, err);
      // Handle error
    });
  }


  private async readAsBase64(cameraPhoto: CameraPhoto) {
    // Fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(cameraPhoto.webPath!);
    const blob = await response.blob();

    return await this.convertBlobToBase64(blob) as string;
  }

  convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader;
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });

  private encodeAsBase64(filePath) {
    console.log('bas', filePath);
    this.base64.encodeFile(filePath).then((base64File: string) => {
      // If it's base64 (DATA_URL):
      const base64Image = 'data:image/jpeg;base64,' + base64File;
      const request: UploadImageRequest = {
        picture: base64Image
      };
      console.log('start', request);
      this.uploadService.uploadImage(request).subscribe(resp => {
        console.log(1, resp);
      }), err => {
        console.log(2, err);
      }
    }, (err) => {
      console.log(err);
    });
  }
}


