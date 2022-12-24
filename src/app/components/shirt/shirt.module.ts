import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShirtComponent } from './shirt.component';
import { PipesModule } from '../../pipes/pipes.module';
import { SizesPipe } from '../../pipes/sizes.pipe';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, PipesModule],
  declarations: [ShirtComponent],
  exports: [ShirtComponent]
})
export class ShirtComponentModule {}
