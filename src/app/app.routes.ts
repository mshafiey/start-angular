import { Routes } from '@angular/router';
import { PageTestComponent } from './pages/page-test/page-test.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'page-test', component: PageTestComponent },
];
