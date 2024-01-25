import { Routes } from '@angular/router';
import { LoginComponent } from './components/content/login/login.component';
import { RegisterComponent } from './components/content/register/register.component';

export const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];
