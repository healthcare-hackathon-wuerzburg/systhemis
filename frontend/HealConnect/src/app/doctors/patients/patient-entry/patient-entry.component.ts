import { Component } from '@angular/core';
import { DatePipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-patient-entry',
  standalone: true,
  imports: [
    DatePipe,
    NgIf,
  ],
  templateUrl: './patient-entry.component.html',
  styleUrl: './patient-entry.component.scss'
})
export class PatientEntryComponent {

}
