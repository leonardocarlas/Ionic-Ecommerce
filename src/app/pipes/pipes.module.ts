import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricePipe } from './price.pipe';
import { SizesPipe } from './sizes.pipe';

@NgModule({
  declarations: [PricePipe, SizesPipe],
  imports: [
    CommonModule
  ],
  entryComponents: [PricePipe, SizesPipe],
  exports: [PricePipe, SizesPipe]
})
export class PipesModule { }