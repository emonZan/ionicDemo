import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckServerPage } from './check-server.page';
import { HttpClientModule} from '@angular/common/http'
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { CheckServerPageRoutingModule } from './check-server-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    CheckServerPageRoutingModule, HttpClientModule
  ],
  declarations: [CheckServerPage]
})
export class CheckServerPageModule {}