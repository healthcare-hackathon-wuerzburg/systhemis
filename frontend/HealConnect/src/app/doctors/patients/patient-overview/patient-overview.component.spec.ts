import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientOverviewComponent } from './patient-overview.component';
import { provideRouter } from '@angular/router';
import { HttpClient } from '@angular/common/http';

describe('PatientOverviewComponent', () => {
  let component: PatientOverviewComponent;
  let fixture: ComponentFixture<PatientOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientOverviewComponent],
      providers: [{provide: HttpClient, useValue: {} as HttpClient}, provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
