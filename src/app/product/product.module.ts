import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { UtilsModule } from '../utils/utils.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ProductDisplayComponent],
  imports: [CommonModule, ProductRoutingModule, UtilsModule, MatButtonModule],
  exports: [ProductDisplayComponent],
})
export class ProductModule {}
