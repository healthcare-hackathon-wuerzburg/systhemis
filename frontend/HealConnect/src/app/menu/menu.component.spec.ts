import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';
import { MenuService } from './menu.service';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    const userService = new UserService({} as HttpClient);
    const menuService = new MenuService(userService);

    await TestBed.configureTestingModule({
      imports: [MenuComponent],
      providers: [provideRouter([]), {provide: MenuService, useValue: menuService}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
