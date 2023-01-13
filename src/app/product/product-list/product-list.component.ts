import { AsyncPipe, NgClass, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { Product } from '../product';
import { ProductDisplayComponent } from '../product-display/product-display.component';
import { ProductService } from '../product.service';

@Component({
  standalone: true,
  selector: 'stn-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [
    MatCardModule,
    NgFor,
    AsyncPipe,
    ProductDisplayComponent,
    MatButtonModule,
    RouterLink,
    NgClass,
  ],
})
export class ProductListComponent {
  products = inject(ProductService).getList();

  // constructor(private productService: ProductService) {
  //   this.productService
  //     .getList()
  //     .subscribe((products: Product[]) => (this.products = products));
  // }
}
