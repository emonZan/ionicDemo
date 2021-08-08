import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SummaryPage } from './summary.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { SummaryPageRoutingModule } from './summary-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: SummaryPage }]),
    SummaryPageRoutingModule,
  ],
  declarations: [SummaryPage]
})
export class SummaryPageModule {}
