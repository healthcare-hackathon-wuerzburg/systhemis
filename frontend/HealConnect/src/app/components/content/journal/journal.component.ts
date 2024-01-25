import {Component} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, UntypedFormGroup, Validators} from "@angular/forms";
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
import {MatDivider} from "@angular/material/divider";
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
    MatTooltip,
    MatDivider
  ],
  templateUrl: './journal.component.html',
  styleUrl: './journal.component.scss'
})
export class JournalComponent {
  overviewForm: UntypedFormGroup;

  constructor(private fb: FormBuilder) {
    this.overviewForm = this.fb.group({
      entryDate: [new Date(), Validators.required],
      state: [0, Validators.required],
      physicalActivity: [0, Validators.required],
      nausea: [0, Validators.required],
      tired: [0, Validators.required],
      mentalStress: [0, Validators.required],
      restrictedLiving: [0, Validators.required],
      smokedCigarettes: [0, Validators.required],
      alkohol: [0, Validators.required],
      weight: [0, Validators.required],
    })
  }

  formatLabel(value: number): string {
    return value.toString();
  }
}
