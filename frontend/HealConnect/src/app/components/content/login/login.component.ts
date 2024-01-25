import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDatepicker, MatDatepickerInput, MatDatepickerToggle } from '@angular/material/datepicker';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
    imports: [ReactiveFormsModule, MatDatepicker, MatDatepickerInput, MatDatepickerToggle, MatFormField, MatInput, MatLabel, MatError, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginFailed = false;
  loginForm: FormGroup;

  public constructor(private fb: FormBuilder) {
    this.loginForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  get emailControl(): AbstractControl {
    return this.loginForm.controls['email'];
  }
  get passwordControl(): AbstractControl {
    return this.loginForm.controls['password'];
  }

  
}
