import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { confirmFieldValidator } from '../../shared/validator/CustomFormValidators';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatOption, MatSelect } from '@angular/material/select';
import { AsyncPipe, NgIf } from '@angular/common';
import { MatStepperModule, StepperOrientation } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { UserService } from '../../../services/user.service';
import { map, Observable, of } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInput,
    MatSelect,
    MatOption,
    MatButton,
    NgIf,
    MatStepperModule,
    MatDatepickerModule,
    MatRadioModule,
    AsyncPipe,
    RouterModule,
    MatCheckboxModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  isPatientRegistration = false;
  registerIsFinished = false;

  stepperOrientation: Observable<StepperOrientation> = of('horizontal');

  userTypeStep: FormGroup;
  personDataStep: FormGroup;
  cancerDataStep: FormGroup;
  cancerTreatment: FormGroup;
  contactDataStep: FormGroup;

  public constructor(private fb: FormBuilder,
                     private userService: UserService,
                     private breakpointObserver: BreakpointObserver) {
    this.handleStepperBreakpoint();
    this.userTypeStep = fb.group({
      userType: ['', Validators.required]
    });
    this.personDataStep = fb.group({
      firstname: ['', Validators.required],
      secondname: ['', Validators.required],
      gender: ['', Validators.required],
      birthdate: ['', Validators.required]
    })
    this.cancerDataStep = fb.group({
      cancerPosition: ['', Validators.required],
      cancerSituation: ['', Validators.required]
    })
    this.cancerTreatment = fb.group({
      operation: [false],
      infrared: [false],
      medicin: [false],
      other: [false]
    })
    this.contactDataStep = fb.group({
        email: ['', [Validators.required, Validators.email]],
        username: ['', [Validators.required]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      },
      {validators: confirmFieldValidator('password', 'confirmPassword')}
    );

    this.userTypeStep.get('userType')
      ?.valueChanges.subscribe((value) => {
      if (value == 'user') {
        this.isPatientRegistration = true;
      } else {
        this.isPatientRegistration = false;
      }
    });
  }

  sendRegistration() {
    const userValues = this.userTypeStep.value;
    const personValues = this.personDataStep.value;
    const cancerValues = this.cancerDataStep.value;
    const contactValues = this.contactDataStep.value;
    const cancerTreatment = this.cancerTreatment.value;
    const completeValues = { ...userValues,...personValues,...cancerValues,...contactValues, ...cancerTreatment};

    this.userService.register(completeValues)
      .subscribe({
        next: (value) => {
          this.registerIsFinished = true;
        }
      });
  }

  handleStepperBreakpoint() {
    this.stepperOrientation = this.breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  get emailControl(): AbstractControl {
    return this.contactDataStep.controls['email'];
  }

  get usernameControl(): AbstractControl {
    return this.contactDataStep.controls['username'];
  }

  get passwordControl(): AbstractControl {
    return this.contactDataStep.controls['password'];
  }

  get confirmPasswordControl(): AbstractControl {
    return this.contactDataStep.controls['confirmPassword'];
  }

  get formGroupError(): any {
    return this.contactDataStep.errors;
  }

  get genderValue(): string {
    return this.personDataStep?.controls['gender']?.value;
  }

  get firstnameValue(): string {
    return this.personDataStep?.controls['firstname']?.value;
  }
}
