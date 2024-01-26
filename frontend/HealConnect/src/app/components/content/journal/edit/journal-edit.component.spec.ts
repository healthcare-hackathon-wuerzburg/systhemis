import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalEditComponent } from './journal-edit.component';
import { provideNativeDateAdapter } from '@angular/material/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

describe('JournalComponent', () => {
  let component: JournalEditComponent;
  let fixture: ComponentFixture<JournalEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JournalEditComponent, NoopAnimationsModule],
      providers: [provideNativeDateAdapter(), provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JournalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
