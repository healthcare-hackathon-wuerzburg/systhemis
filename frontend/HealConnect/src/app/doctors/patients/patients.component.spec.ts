import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsComponent } from './patients.component';
import { HttpClient } from '@angular/common/http';

describe('PatientsComponent', () => {
  let component: PatientsComponent;
  let fixture: ComponentFixture<PatientsComponent>;

  beforeEach(async () => {
    const httpClient = {} as HttpClient
    await TestBed.configureTestingModule({
      imports: [PatientsComponent],
      providers: [{provide: HttpClient, useValue: httpClient}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
