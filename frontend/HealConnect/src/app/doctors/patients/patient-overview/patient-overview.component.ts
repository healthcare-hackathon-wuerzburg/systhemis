import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Registration, UserType } from '../../../services/user.model';
import { UserService } from '../../../services/user.service';
import { AsyncPipe, DatePipe, NgForOf } from '@angular/common';
import { MatAnchor, MatIconAnchor } from '@angular/material/button';
import { MatCard, MatCardActions, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CancerService } from '../../../services/cancer.service';

@Component({
  selector: 'app-patient-overview',
  standalone: true,
  imports: [
    AsyncPipe,
    MatAnchor,
    MatCard,
    MatCardActions,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatIcon,
    MatIconAnchor,
    NgForOf,
    RouterModule,
    DatePipe,
  ],
  templateUrl: './patient-overview.component.html',
  styleUrl: './patient-overview.component.scss'
})
export class PatientOverviewComponent {

  public patients$: Observable<Registration[]>;

  constructor(private userService: UserService, public cancerService: CancerService) {
    this.patients$ = this.userService.getRegistrations().pipe(map(list => list.filter(entry => entry.userType === UserType.Patient)));
  }

}
