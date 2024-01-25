import { TestBed } from '@angular/core/testing';

import { MenuService } from './menu.service';
import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';

describe('MenuService', () => {
  let service: MenuService;
  let userService: UserService;

  beforeEach(() => {
    userService = new UserService({} as HttpClient);
    service = new MenuService(userService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return loggedIn menu', () => {
    userService.isLoggedIn = () => true;
    const menuModel = service.getMenuModel();
    expect(menuModel.findIndex(m => m.label === 'Dashboard') === 1).toBeTrue();
  });

  it('should return loggedout menu', () => {
    userService.isLoggedIn = () => false;
    const menuModel = service.getMenuModel();
    expect(menuModel.findIndex(m => m.label === 'Home') === 0).toBeTrue();
  });
});
