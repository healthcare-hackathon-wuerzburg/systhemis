import { Component } from '@angular/core';
import { MatList, MatListItem } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MenuService } from './menu.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MatList,
    MatListItem,
    RouterLink,
    MatIcon,
    MatButton,
    MatMenu,
    MatMenuTrigger,
    MatMenuItem,
    NgFor
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  constructor(public menuService: MenuService) {
  }
}
