import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductDisplayComponent } from './product-display/product-display.component';


@NgModule({
  declarations: [
    ProductDisplayComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  exports: [
    ProductDisplayComponent
  ]
})
export class ProductModule { }
