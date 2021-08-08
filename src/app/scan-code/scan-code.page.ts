import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { NavController } from '@ionic/angular';

import { DataService } from '../services/data.service';
import { UploadService } from '../services/upload.service';

@Component({
  selector: 'app-scan-code',
  templateUrl: 'scan-code.page.html',
  styleUrls: ['scan-code.page.scss'],
  providers: [UploadService]
})
export class ScanCodePage {
  scannedData: any;
  serverInfo: { domainName: string; userName: any; password: any; };
  constructor(
    private barcodeScanner: BarcodeScanner,
    private navCtrl: NavController, private uploadService: UploadService,
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
      console.log('Barcode data', barcodeData);
      const content = barcodeData.text;

      this.serverInfo = {
        domainName: content.split(';')[0],
        userName: content.matchAll(/;user:(\w+?);/g).next().value[1],
        password: content.matchAll(/;secret:(\w+?);/g).next().value[1]
      }
      this.dataService.saveData('serverInfo', this.serverInfo);
      this.router.navigateByUrl('/status-check');
    }).catch(err => {
      console.log('Error', err);
    });
  }
}
