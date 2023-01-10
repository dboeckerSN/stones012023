import { Component } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'stn-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css'],
})
export class ProductDisplayComponent {
  product = new Product(0, 'Grabstein Granit', 12.56, 32.45);

  raisePrice() {
    this.product.price += 5;
    alert('Neuer Preis: ' + this.product.price);
  }
}
