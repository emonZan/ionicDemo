import { HttpClient, HttpHandler } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { NavController } from '@ionic/angular';
import { UploadService } from '../services/upload.service';

@Component({
  selector: 'app-scan-code',
  templateUrl: 'scan-code.page.html',
  styleUrls: ['scan-code.page.scss'],
  providers: [UploadService]
})
export class ScanCodePage {
  scannedData: any;
  serverInfo: { domainName: string; };
  constructor(
    private barcodeScanner: BarcodeScanner,
    private navCtrl: NavController, private uploadService: UploadService,
    private router: Router) { 
    
    }
  scanBarcode() {
    this.uploadService.saveServerInfo('server','123');
    this.router.navigateByUrl('/status-check');
  //   const options: BarcodeScannerOptions = {
  //     preferFrontCamera: false,
  //     showFlipCameraButton: true,
  //     showTorchButton: true,
  //     torchOn: false,
  //     prompt: 'Place a QR code inside the scan area',
  //     resultDisplayDuration: 500,
  //     formats: 'EAN_13,EAN_8,QR_CODE,PDF_417 ',
  //     orientation: 'portrait',
  //   };
  //   this.barcodeScanner.scan(options).then(barcodeData => {
  //     console.log('Barcode data', barcodeData);
  //     const content = barcodeData.text;
  
  //     this.serverInfo = {
  //      domainName: content.split(';')[0]
  //     //  userName:content.matchAll(/;user:(\w+?);/g).next().value[1],
  //     //  password:content.matchAll(/;secret:(\w+?);/g).next().value[1]
  //     }
  //     this.uploadService.domainName = '123';
  //     // this.navCtrl.push('serverInfo', this.serverInfo);
  //   }).catch(err => {
  //     console.log('Error', err);
  //   });
  }
}
