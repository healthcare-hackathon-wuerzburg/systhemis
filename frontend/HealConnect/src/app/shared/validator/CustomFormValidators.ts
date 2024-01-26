import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function confirmFieldValidator(confirmedFieldName: string, confirmationFieldName: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return control.value[confirmedFieldName] == control.value[confirmationFieldName] ? null : { confirmFailed: true }
  };
}
