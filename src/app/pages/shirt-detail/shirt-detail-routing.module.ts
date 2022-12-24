import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShirtDetailPage } from './shirt-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ShirtDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShirtDetailPageRoutingModule {}
