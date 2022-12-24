import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TshirtOrderDetailComponent } from './tshirt-order-detail.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [TshirtOrderDetailComponent],
  imports: [
    CommonModule, IonicModule
  ],
  exports: [TshirtOrderDetailComponent]
})
export class TshirtOrderModuleModule { }
