import { Component, inject } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'stn-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Product[] = inject(ProductService).getList();

  // constructor(private productService: ProductService) {
  //   this.products = this.productService.getList();
  // }
}
