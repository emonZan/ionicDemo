import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';

import { DataService, ServerInfo } from '../services/data.service';

@Component({
  selector: 'app-scan-code',
  templateUrl: 'scan-code.page.html',
  styleUrls: ['scan-code.page.scss']
})
export class ScanCodePage {
  serverInfo: ServerInfo;
  constructor(
    private barcodeScanner: BarcodeScanner,
    private router: Router,
    private dataService: DataService) {

  }

  scanBarcode() {
    const options: BarcodeScannerOptions = {
      preferFrontCamera: false,
      showFlipCameraButton: true,
      showTorchButton: true,
      torchOn: false,
      prompt: 'Place a QR code inside the scan area',
      resultDisplayDuration: 500,
      formats: 'EAN_13,EAN_8,QR_CODE,PDF_417 ',
      orientation: 'portrait',
    };
    this.barcodeScanner.scan(options).then(barcodeData => {
      const content = barcodeData.text;
      this.serverInfo = {
        domainName: content.split(';')[0].substring('apiserver:'.length),
        userName: content.split(';')[1].split(':')[1],
        password: content.split(';')[2].split(':')[1]
      }
      this.dataService.saveData('serverInfo', this.serverInfo);
      this.router.navigateByUrl('/status-check');
    }).catch(err => {
      // TODO: Handle error
      console.log(err);
    });
  }
}
