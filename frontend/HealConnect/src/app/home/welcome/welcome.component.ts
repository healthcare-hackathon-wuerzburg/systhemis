import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatStepperNext } from '@angular/material/stepper';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterModule, MatButton, MatIcon, MatStepperNext],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

}
