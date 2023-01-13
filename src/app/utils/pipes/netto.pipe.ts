import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'netto',
})
export class NettoPipe implements PipeTransform {
  transform(
    price: number,
    tax = 19,
    type: 'brutto' | 'netto' = 'netto'
  ): number {
    if (type === 'brutto') {
      return price * (1 + tax / 100);
    } else {
      return price / (1 + tax / 100);
    }
  }
}
