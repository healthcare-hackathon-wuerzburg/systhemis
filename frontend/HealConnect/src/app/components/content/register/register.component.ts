import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { confirmFieldValidator } from '../../shared/validator/CustomFormValidators';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatOption, MatSelect } from '@angular/material/select';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    MatSelect,
    MatOption,
    MatError,
    NgIf
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registrationForm: FormGroup;

  public constructor(private fb: FormBuilder) {
    this.registrationForm = fb.group({
        email: ['',  [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
        userType: ['', Validators.required]
      },
      {validators: confirmFieldValidator('password', 'confirmPassword')})
  }

  get emailControl(): AbstractControl {
    return this.registrationForm.controls['email'];
  }
  get passwordControl(): AbstractControl {
    return this.registrationForm.controls['password'];
  }
  get confirmPasswordControl(): AbstractControl {
    return this.registrationForm.controls['confirmPassword'];
  }
  get formGroupError(): any {
    console.log(this.registrationForm.errors)
    return this.registrationForm.errors;
  }
}
