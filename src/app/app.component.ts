import { Component } from '@angular/core';
import { Product } from './product/product';

@Component({
  selector: 'stn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Stones';
  parentProduct = new Product(0, 'Grabstein Granit', 12.56, 32.45);

  onPriceChanged(price: number) {
    alert('Neuer Preis: ' + price);
    this.parentProduct.price = price;
  }
}
