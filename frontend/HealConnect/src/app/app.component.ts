import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { HeadComponent } from './head/head.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, MenuComponent, HeadComponent, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  loaded = false;

  public constructor() {
    this.loaded = true;
  }
}
