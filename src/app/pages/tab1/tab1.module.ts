import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { HeaderComponentModule } from '../../components/header/header.module';
import { ShirtComponentModule } from '../../components/shirt/shirt.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HeaderComponentModule,
    Tab1PageRoutingModule,
    ShirtComponentModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
