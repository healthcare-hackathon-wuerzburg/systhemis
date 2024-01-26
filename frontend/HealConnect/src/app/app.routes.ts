import {Routes} from '@angular/router';
import {LoginComponent} from './home/login/login.component';
import {RegisterComponent} from './home/register/register.component';
import {WelcomeComponent} from './home/welcome/welcome.component';

import { InfoComponent } from './patients/info/info.component';
import { DashboardComponent } from './patients/dashboard/dashboard.component';
import { ChartsComponent } from './patients/charts/charts.component';
import { JournalEditComponent } from './patients/journal/edit/journal-edit.component';
import { journalEditResolver } from './patients/journal/edit/journal-edit.resolver';
import { OverviewComponent } from './patients/journal/overview/overview.component';
import { PatientOverviewComponent } from './doctors/patients/patient-overview/patient-overview.component';
import { PatientEntryComponent } from './doctors/patients/patient-entry/patient-entry.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'journal/edit', component: JournalEditComponent, resolve: {journalEntry: journalEditResolver}},
  {path: 'journal', component: OverviewComponent},
  {path: 'info', component: InfoComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'charts', component: ChartsComponent},
  {path: 'patients', component: PatientOverviewComponent},
  {path: 'patients/edit', component: PatientEntryComponent}
];
