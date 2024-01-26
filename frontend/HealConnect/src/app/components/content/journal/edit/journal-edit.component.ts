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
import { MatStep, MatStepper, MatStepperNext, StepperOrientation } from '@angular/material/stepper';
import {BreakpointObserver} from "@angular/cdk/layout";
import {map, Observable, of} from "rxjs";
import { MatAnchor, MatButton } from '@angular/material/button';
import {MatIcon} from "@angular/material/icon";
import {JournalService} from "../../../../services/journal.service";
import {ActivatedRoute, Router, RouterLink} from '@angular/router';

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
    MatStepper,
    MatButton,
    MatIcon,
    MatStepperNext,
    RouterLink,
    MatAnchor,
  ],
  templateUrl: './journal-edit.component.html',
  styleUrl: './journal-edit.component.scss'
})
export class JournalEditComponent {
  overviewForm: UntypedFormGroup;
  symptomsForm: UntypedFormGroup;
  painForm: UntypedFormGroup;
  swallowForm: UntypedFormGroup;
  breathForm: UntypedFormGroup;
  bleedingForm: UntypedFormGroup;
  stepperOrientation: Observable<StepperOrientation> = of('horizontal');
  maxDate = new Date();
  minDate = new Date();

  constructor(private fb: FormBuilder, private breakpointObserver: BreakpointObserver, private journalService: JournalService,
              private router: Router, private activatedRoute: ActivatedRoute) {
    this.setupForms();
    this.initEntry();
    this.minDate.setDate(this.minDate.getDate() - 4);
    this.handleStepperBreakpoint();
  }

  private initEntry() {
    this.activatedRoute.data.subscribe((data) => {
      this.overviewForm.patchValue({
        ...data.journalEntry.overview
      })
      this.symptomsForm.patchValue({
        ...data.journalEntry.symptoms
      });
    })
  }

  private setupForms() {
    this.overviewForm = this.fb.group({
      entryDate: [new Date(), Validators.required],
      state: [0, Validators.required],
      physicalActivity: [0, Validators.required],
      nausea: [0, Validators.required],
      tired: [0, Validators.required],
      mentalStress: [0, Validators.required],
      restrictedLiving: [0, Validators.required],
      smokedCigarettes: [0, Validators.required],
      alcohol: [0, Validators.required],
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
      pain: this.painForm,
      swallow: this.swallowForm,
      breath: this.breathForm,
      bleeding: this.bleedingForm,
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

  saveJournalEntry() {
    this.overviewForm.controls.entryDate.value.setHours(0, 0, 0, 0);
    this.journalService.addJournalEntry({overview: this.overviewForm.value, symptoms: this.symptomsForm.value});
    this.router.navigate(['journal']);
  }
}
