import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScanCodePage } from './scan-code.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ScanCodePageRoutingModule } from './scan-code-routing.module';
import { QRScanner } from '@ionic-native/qr-scanner'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ScanCodePageRoutingModule
  ],
  declarations: [ScanCodePage]
})
export class ScanCodePageModule {}
