import { Component } from '@angular/core';
import { FormBulilderComponent } from '../form-bulilder/form-bulilder.component';

@Component({
  selector: 'app-form1',
  standalone: true,
  imports: [FormBulilderComponent],
  templateUrl: './form1.component.html',
  styleUrl: './form1.component.scss',
})
export class Form1Component {}
