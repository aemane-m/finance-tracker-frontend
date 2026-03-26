import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordMatchValidator(
  passwordField = 'password',
  confirmField  = 'confirmPassword',
): ValidatorFn {
  return (ctrl: AbstractControl): ValidationErrors | null => {
    const pw  = ctrl.get(passwordField)?.value;
    const cpw = ctrl.get(confirmField)?.value;
    return pw && cpw && pw !== cpw ? { passwordMismatch: true } : null;
  };
}
