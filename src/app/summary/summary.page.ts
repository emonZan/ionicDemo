import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { UploadService } from '../services/upload.service';

@Component({
  selector: 'app-summary',
  templateUrl: 'summary.page.html',
  styleUrls: ['summary.page.scss'],
  providers: [DataService]
})
export class SummaryPage implements OnInit {
  img = '';
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getImageUrl();
  }

  getImageUrl() {
    const serverInfo = this.dataService.getData('serverInfo');
    const imageUrl = this.dataService.getData('imageUrl');
    this.img = serverInfo.domainName + imageUrl;
  }

}
