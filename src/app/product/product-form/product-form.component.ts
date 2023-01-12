import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CustomValidators } from 'src/app/utils/custom-validators';
import { Product } from '../product';

@Component({
  selector: 'stn-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent {
  @Output() onSave = new EventEmitter<Product>();
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
  constructor(private fb: FormBuilder) {}

  save() {
    const formVal = this.productForm.value;
    if (
      this.productForm.valid &&
      formVal.name &&
      formVal.price &&
      formVal.weight
    ) {
      const newProduct: Product = {
        id: -1,
        name: formVal.name,
        price: formVal.price,
        weight: formVal.weight,
      };

      this.onSave.emit(newProduct);
      this.productForm.reset();
    }
  }
}
