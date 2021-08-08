import { Component, OnInit } from '@angular/core';
import { UploadService } from '../services/upload.service';

@Component({
  selector: 'app-summary',
  templateUrl: 'summary.page.html',
  styleUrls: ['summary.page.scss']
})
export class SummaryPage implements OnInit {

  constructor(private uploadService: UploadService) { }

  ngOnInit() {
    this.getImage();
  }
  getImage() {
    this.uploadService.getImage().subscribe(data => {
    })
  }
}
