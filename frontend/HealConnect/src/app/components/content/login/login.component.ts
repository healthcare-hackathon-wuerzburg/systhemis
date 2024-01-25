import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDatepicker, MatDatepickerInput, MatDatepickerToggle } from '@angular/material/datepicker';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { NgIf } from '@angular/common';
import { UserService } from '../../../services/user.service';

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

  public constructor(private fb: FormBuilder,
                     private userService: UserService) {
    this.loginForm = fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value)
        .subscribe({
          next(value) {
            console.log('Adding: ' + value);
          },
          error(error) {
            console.log(error);
            console.log(error);
            // We actually could just remove this method,
            // since we do not really care about errors right now.
          },
          complete() {
            console.log('Sum equals: ');
          }
        });
    }
  }

  get usernameControl(): AbstractControl {
    return this.loginForm.controls['username'];
  }

  get passwordControl(): AbstractControl {
    return this.loginForm.controls['password'];
  }

}
