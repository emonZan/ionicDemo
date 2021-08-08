import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'index',
    loadChildren: () => import('./scan-code/scan-code.module').then(m => m.ScanCodePageModule)
  },
  {
    path: 'status-check',
    loadChildren: () => import('./check-server/check-server.module').then(m => m.CheckServerPageModule)
  },
  {
    path: 'summary',
    loadChildren: () => import('./summary/summary.module').then(m => m.SummaryPageModule)
  },
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
