import { Injectable } from '@angular/core';
import { MenuModel } from './menu.model';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private initialRoutes: MenuModel[] = [
    {
      label: 'Home',
      link: '/home'
    },
    {
      label: 'Registrieren',
      link: '/register'
    },
    {
      label: 'Login',
      link: '/login'
    }
  ];

  private loggedInRoutes: MenuModel[] = [
    {
      label: 'Home',
      link: '/home'
    },
    {
      label: 'Dashboard',
      link: '/dashboard'
    },
  ];

  constructor(private userService: UserService) { }

  getMenuModel(): MenuModel[] {
    return this.userService.isLoggedIn() ? this.loggedInRoutes : this.initialRoutes;
  }
}
