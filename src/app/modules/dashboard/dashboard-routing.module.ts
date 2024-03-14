import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { TestComponent } from './pages/test/test.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'nfts', pathMatch: 'full' },
      { path: 'test', component: TestComponent },
      { path: 'about', component: AboutComponent },
      { path: '**', redirectTo: 'error/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
