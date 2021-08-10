import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../services/data.service';
import { UploadImageRequest, UploadService } from '../services/upload.service';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-check-server',
  templateUrl: 'check-server.page.html',
  styleUrls: ['check-server.page.scss'],
  providers: [UploadService]
})
export class CheckServerPage{
  enableUpload = false;
  constructor(private uploadService: UploadService,
    private dataService: DataService,
    private router: Router,
    private photoService: PhotoService) { }

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
    this.photoService.gePictureData().then(imageData => {
     this.uploadImage(imageData);
    });
  }

  private uploadImage(imageBase64Str: string) {
    const request: UploadImageRequest = {
      picture: imageBase64Str
    };
    this.uploadService.uploadImage(request).subscribe(data => {
      this.dataService.saveData('imageUrl', data.file);
      console.log('imageUrl', data.file)
      this.router.navigateByUrl('/summary');
    }, err => {
      // TODO: Handle error
      console.log('check status err', err);
    });
  }
}


