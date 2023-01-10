import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'stn-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css'],
})
export class ProductDisplayComponent {
  @Input() product!: Product;
  @Output() priceChange = new EventEmitter<number>();

  raisePrice() {
    this.product.price += 5;
    this.priceChange.emit(this.product.price);
  }
}
