import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckServerPage } from './check-server.page';

const routes: Routes = [
  {
    path: '',
    component: CheckServerPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckServerPageRoutingModule {}
