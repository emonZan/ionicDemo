import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScanCodePage } from './scan-code.page';

import { ScanCodePageRoutingModule } from './scan-code-routing.module';
import { QRScanner } from '@ionic-native/qr-scanner'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ScanCodePageRoutingModule,HttpClientModule
  ],
  declarations: [ScanCodePage]
})
export class ScanCodePageModule {}
