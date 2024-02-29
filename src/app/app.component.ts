import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBulilderComponent } from './form-bulilder/form-bulilder.component';
import { Form1Component } from './form1/form1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormBulilderComponent, Form1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'start-angular';
}
