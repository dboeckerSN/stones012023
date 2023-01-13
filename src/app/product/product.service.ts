import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getList() {
    return this.http.get<Product[]>('http://10.10.4.100:3000/products');
  }

  newProduct(product: Partial<Product>) {
    return this.http.post<void>('http://10.10.4.100:3000/products', product);
  }
}

export class MockProductService {
  getList() {
    return of([
      {
        id: 0,
        name: 'armin',
        price: 5,
        weight: 8,
      },
    ]);
  }
  newProduct() {
    of();
  }
}
