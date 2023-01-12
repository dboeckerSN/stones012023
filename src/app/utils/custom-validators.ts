import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  static alphaNum(ctrl: AbstractControl): ValidationErrors | null {
    const pattern: RegExp = /^[a-zA-Z0-9]+$/;
    return pattern.test(ctrl.value) ? null : { alphaNum: true };
  }
}
