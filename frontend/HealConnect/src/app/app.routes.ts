import {Routes} from '@angular/router';
import {LoginComponent} from './components/content/login/login.component';
import {RegisterComponent} from './components/content/register/register.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {JournalEditComponent} from "./components/content/journal/edit/journal-edit.component";
import {DashboardComponent} from './components/content/dashboard/dashboard.component';
import {InfoComponent} from './components/content/info/info.component';
import {ChartsComponent} from "./components/content/charts/charts.component";
import {OverviewComponent} from "./components/content/journal/overview/overview.component";
import {journalEditResolver} from "./components/content/journal/edit/journal-edit.resolver";

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'journal/edit', component: JournalEditComponent, resolve: {journalEntry: journalEditResolver}},
  {path: 'journal', component: OverviewComponent},
  {path: 'info', component: InfoComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'charts', component: ChartsComponent}
];
