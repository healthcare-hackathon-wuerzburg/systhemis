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
import {MatStep, MatStepper, StepperOrientation} from "@angular/material/stepper";
import {BreakpointObserver} from "@angular/cdk/layout";
import {map, Observable, of} from "rxjs";
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
    MatDivider,
    MatStep,
    MatStepper
  ],
  templateUrl: './journal.component.html',
  styleUrl: './journal.component.scss'
})
export class JournalComponent {
  overviewForm: UntypedFormGroup;
  symptomsForm: UntypedFormGroup;
  painForm: UntypedFormGroup;
  swallowForm: UntypedFormGroup;
  breathForm: UntypedFormGroup;
  bleedingForm: UntypedFormGroup;
  stepperOrientation: Observable<StepperOrientation> = of('horizontal');

  constructor(private fb: FormBuilder, private breakpointObserver: BreakpointObserver) {
    this.handleStepperBreakpoint();
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
    });
    this.painForm = this.fb.group({
      headPain: [0, Validators.required],
      nosePain: [0, Validators.required],
      mouthPain: [0, Validators.required],
      throatPain: [0, Validators.required],
      neckPain: [0, Validators.required]
    });
    this.swallowForm = this.fb.group({
      swallowPain: [0, Validators.required],
      mouthDryness: [0, Validators.required],
      smellTastingIssues: [0, Validators.required],
      swallowingFood: [0, Validators.required],
      swallowingDrinks: [0, Validators.required],
      swallowUp: [0, Validators.required],
      feedingTube: [0, Validators.required],
    });
    this.breathForm = this.fb.group({
      breathlessnessCalm: [0, Validators.required],
      breathlessnessActivity: [0, Validators.required],
      coughing: [0, Validators.required],
      hoarseness: [0, Validators.required],
    });
    this.bleedingForm = this.fb.group({
      bleedNose: [0, Validators.required],
      bleedMouth: [0, Validators.required],
      bleedThroat: [0, Validators.required],
      bleedDeep: [0, Validators.required],
    });

    this.symptomsForm = this.fb.group({
      painForm: this.painForm,
      swallowForm: this.swallowForm,
      breathForm: this.breathForm,
      bleedingForm: this.bleedingForm,
    });
  }

  handleStepperBreakpoint() {
    this.stepperOrientation = this.breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  formatLabel(value: number): string {
    return value.toString();
  }
}
