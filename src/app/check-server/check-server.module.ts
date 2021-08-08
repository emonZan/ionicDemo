import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'

import { CheckServerPageRoutingModule } from './check-server-routing.module';
import { CheckServerPage } from './check-server.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CheckServerPageRoutingModule, HttpClientModule
  ],
  declarations: [CheckServerPage]
})
export class CheckServerPageModule {}
