import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { HeaderComponentModule } from '../../components/header/header.module';
import { ShirtComponentModule } from '../../components/shirt/shirt.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HeaderComponentModule,
    Tab2PageRoutingModule,
    ShirtComponentModule
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
