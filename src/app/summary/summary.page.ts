import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { UploadService } from '../services/upload.service';

@Component({
  selector: 'app-summary',
  templateUrl: 'summary.page.html',
  styleUrls: ['summary.page.scss'],
  providers: [UploadService]
})
export class SummaryPage implements OnInit {
  serverImgUrl = '';
  constructor(private dataService: DataService,
    private uploadService: UploadService) { }

  ngOnInit() {
    this.getImageUrl();
  }

  getImageUrl() {
    const serverInfo = this.dataService.getData('serverInfo');
    const imageUrl = this.dataService.getData('imageUrl');
    this.serverImgUrl = serverInfo.domainName + this.uploadService.getImageUrl + imageUrl;
  }

}
