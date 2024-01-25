import { Component } from '@angular/core';
import { MatList, MatListItem } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';

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
    MatMenuItem
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}
