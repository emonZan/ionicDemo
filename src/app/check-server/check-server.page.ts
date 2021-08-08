import { Component } from '@angular/core';
import { UploadImageRequest, UploadService } from '../service/upload.service';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-check-server',
  templateUrl: 'check-server.page.html',
  styleUrls: ['check-server.page.scss'],
  providers: [UploadService, PhotoService ]
})
export class CheckServerPage {
  enableUpload = true;
  constructor(private uploadService: UploadService,
    public photoService: PhotoService) {}

  checkServerStatus() {
    this.uploadService.checkServerStatus().subscribe(resp=>{
      if(resp.status==='ok'){
        this.enableUpload = true;
      }
      console.log(resp);
    });
  }
  
  async takePhoto() {
    const base64Data = await this.photoService.savePhoto();
    const request: UploadImageRequest = {
      picture: base64Data
    };
    this.uploadService.uploadImage(request).subscribe(resp=>{
      console.log(resp);
    })
  }
}


