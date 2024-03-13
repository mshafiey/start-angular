import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsideComponent } from './componnet/aside/aside.component';
import { NavComponent } from './componnet/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsideComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'start';
}
