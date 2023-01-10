import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDisplayComponent } from './product-display.component';

describe('ProductDisplayComponent', () => {
  let component: ProductDisplayComponent;
  let fixture: ComponentFixture<ProductDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDisplayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should raise price', () => {
    const currentPrice = component.product.price;

    component.raisePrice();

    expect(component.product.price).toBe(currentPrice + 5);
  });
});
