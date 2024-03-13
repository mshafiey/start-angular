import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsideComponent } from './component/aside/aside.component';
import { NavComponent } from './component/nav/nav.component';
import { WidecardComponent } from './component/widecard/widecard.component';
import { TinycardComponent } from './component/tinycard/tinycard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AsideComponent,
    NavComponent,
    WidecardComponent,
    TinycardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'start';
}
