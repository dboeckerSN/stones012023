import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Product } from '../product';

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
    component.product = new Product(1, 'Teststein', 2, 5);
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

  it('should show product name', () => {
    const nameElment = fixture.debugElement.query(By.css('#name'));

    expect(nameElment.nativeElement.textContent).toContain('Teststein');
  });
});
