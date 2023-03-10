import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockProductService, ProductService } from '../product.service';

import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListComponent, RouterTestingModule],
      providers: [{ provide: ProductService, useClass: MockProductService }],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should read products from service', () => {
    component.products?.subscribe((products) => {
      expect(products[0].name).toBe('armin');
    });
  });
});
