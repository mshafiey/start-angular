import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsideComponent } from './layout/aside/aside.component';
import { NavComponent } from './layout/nav/nav.component';
import { WidecardComponent } from './component/widecard/widecard.component';
import { TinycardComponent } from './component/tinycard/tinycard.component';
import { BigcardComponent } from './component/bigcard/bigcard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AsideComponent,
    NavComponent,
    WidecardComponent,
    TinycardComponent,
    BigcardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'start';
}
