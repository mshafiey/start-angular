import { Component } from '@angular/core';
import { BigcardComponent } from '../component/bigcard/bigcard.component';
import { TinycardComponent } from '../component/tinycard/tinycard.component';
import { WidecardComponent } from '../component/widecard/widecard.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [WidecardComponent, TinycardComponent, BigcardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
