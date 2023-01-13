import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return product list', () => {
    const products = service.getList();

    expect(products[0].id).toBe(0);
  });

  it('should add product to product list', () => {
    const product = {
      id: 45,
      name: 'armin',
      price: 34,
      weight: 56,
    };

    service.newProduct(product);

    expect(service.getList()[0].id).toBe(45);
  });
});
