import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShirtDetailPageRoutingModule } from './shirt-detail-routing.module';

import { ShirtDetailPage } from './shirt-detail.page';
import { HeaderComponentModule } from '../../components/header/header.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShirtDetailPageRoutingModule,
    HeaderComponentModule,
    PipesModule
  ],
  declarations: [ShirtDetailPage]
})
export class ShirtDetailPageModule {}
