import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDatepicker, MatDatepickerInput, MatDatepickerToggle } from '@angular/material/datepicker';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { NgIf } from '@angular/common';
import { UserService } from '../../../services/user.service';
import { Router, RouterModule } from '@angular/router';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, MatDatepicker, MatDatepickerInput, MatDatepickerToggle, MatFormField, MatInput, MatLabel, MatError, NgIf, MatButton],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginFailed = false;
  loginForm: FormGroup;

  public constructor(private fb: FormBuilder,
                     private userService: UserService,
                     private router: Router) {
    this.loginForm = fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value)
        .subscribe({
          next: (value) => {
            this.router.navigate(['dashboard']);
          },
          error: (error) => {
            if(error.status == 401) {
              this.loginFailed = true;
            }
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
