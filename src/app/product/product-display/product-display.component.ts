import {
  CommonModule,
  CurrencyPipe,
  NgClass,
  NgFor,
  NgIf,
  NgStyle,
} from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NettoPipe } from 'src/app/utils/pipes/netto.pipe';
import { Product } from '../product';

@Component({
  standalone: true,
  selector: 'stn-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css'],
  imports: [CommonModule, NettoPipe, MatButtonModule],
})
export class ProductDisplayComponent {
  @Input() product!: Product;
  @Output() priceChange = new EventEmitter<number>();
  showPrice = true;

  styleConfig = {
    'border-style': 'dashed',
  };

  togglePrice() {
    this.showPrice = !this.showPrice;
  }

  raisePrice() {
    this.product.price += 5;
    this.priceChange.emit(this.product.price);
  }

  changePrice(price: string) {
    this.product.price = Number(price);
  }
}
