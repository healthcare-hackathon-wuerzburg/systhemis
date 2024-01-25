import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { confirmFieldValidator } from '../../shared/validator/CustomFormValidators';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatOption, MatSelect } from '@angular/material/select';
import { NgIf } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInput,
    MatSelect,
    MatOption,
    NgIf,
    MatStepperModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  firstRegistrationStep: FormGroup;
  secondRegistrationStep: FormGroup;

  public constructor(private fb: FormBuilder) {
    this.firstRegistrationStep = fb.group({
        email: ['',  [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
        userType: ['', Validators.required]
      },
      {validators: confirmFieldValidator('password', 'confirmPassword')}
    );
    this.secondRegistrationStep = fb.group( {
      test: ['', Validators.required],
      test3: ['', Validators.required]
    })
  }

  get emailControl(): AbstractControl {
    return this.firstRegistrationStep.controls['email'];
  }
  get passwordControl(): AbstractControl {
    return this.firstRegistrationStep.controls['password'];
  }
  get confirmPasswordControl(): AbstractControl {
    return this.firstRegistrationStep.controls['confirmPassword'];
  }
  get formGroupError(): any {
    return this.firstRegistrationStep.errors;
  }
}
