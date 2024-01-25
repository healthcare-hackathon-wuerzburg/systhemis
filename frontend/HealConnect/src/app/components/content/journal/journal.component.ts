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
    MatButtonToggle
  ],
  templateUrl: './journal.component.html',
  styleUrl: './journal.component.scss'
})
export class JournalComponent {
  form: UntypedFormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      entryDate: [''],
      state: [],
      newSymptoms: []
    })
  }
}
