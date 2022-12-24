import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import { HeaderComponentModule } from '../../components/header/header.module';
import { ShirtComponentModule } from 'src/app/components/shirt/shirt.module';
import { TshirtOrderModuleModule } from 'src/app/components/tshirt-order-detail/tshirt-order-module.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HeaderComponentModule,
    Tab3PageRoutingModule,
    ShirtComponentModule,
    TshirtOrderModuleModule
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
