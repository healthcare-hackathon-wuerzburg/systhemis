import {Component} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, UntypedFormGroup} from "@angular/forms";
import {MatFormFieldModule, MatHint, MatLabel, MatSuffix} from "@angular/material/form-field";
import {
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from "@angular/material/datepicker";
import {MatInput} from "@angular/material/input";
import {CommonModule} from "@angular/common";
import {MatSlider, MatSliderModule, MatSliderThumb} from "@angular/material/slider";
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {MatTooltip} from "@angular/material/tooltip";
@Component({
  selector: 'app-journal',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatLabel,
    MatFormFieldModule,
    MatDatepickerInput,
    MatInput,
    MatDatepickerToggle,
    MatDatepickerModule,
    CommonModule,
    MatSliderModule,
    MatHint,
    MatSuffix,
    MatSlider,
    MatSliderThumb,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatTooltip
  ],
  templateUrl: './journal.component.html',
  styleUrl: './journal.component.scss'
})
export class JournalComponent {
  overviewForm: UntypedFormGroup;

  constructor(private fb: FormBuilder) {
    this.overviewForm = this.fb.group({
      entryDate: [new Date()],
      state: [0],
      physicalActivity: [0],
      nausea: [0],
      tired: [0],
      mentalStress: [0],
      restrictedLiving: [0],
      smokedCigarettes: [0],
      alkohol: [0],
      weight: [0],
    })
  }

  formatLabel(value: number): string {
    return value.toString();
  }
}
