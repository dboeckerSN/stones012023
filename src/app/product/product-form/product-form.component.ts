import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomValidators } from 'src/app/utils/custom-validators';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'stn-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent {
  // @Output() onSave = new EventEmitter<Product>();
  // productForm = new FormGroup({
  //   name: new FormControl('', [Validators.required, CustomValidators.alphaNum]),
  //   price: new FormControl(0, [Validators.required, CustomValidators.positiv]),
  //   weight: new FormControl(0, [Validators.required]),
  // });
  productForm = this.fb.group({
    name: ['', [Validators.required, CustomValidators.alphaNum]],
    price: [0, [Validators.required, CustomValidators.positiv]],
    weight: [0, [Validators.required]],
  });
  id = -1;

  private productService = inject(ProductService);

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((paramMap) => {
      const prodId = paramMap.get('id');
      if (prodId) {
        this.id = Number(prodId);
      }
    });
  }

  save() {
    const formVal = this.productForm.value;
    if (
      this.productForm.valid &&
      formVal.name &&
      formVal.price &&
      formVal.weight
    ) {
      const newProduct: Product = {
        id: this.id,
        name: formVal.name,
        price: formVal.price,
        weight: formVal.weight,
      };

      this.productService.newProduct(newProduct);
      this.productForm.reset();
    }
  }

  hasSaved(): boolean {
    if (
      !this.productForm.value.name &&
      !this.productForm.value.price &&
      !this.productForm.value.weight
    ) {
      return true;
    } else {
      return confirm(
        'Sie haben ungespeicherte Änderungen, wollen sie wirklich weg?'
      );
    }
  }
}
