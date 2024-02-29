import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-form-bulilder',
  standalone: true,
  imports: [MatSlideToggleModule],
  templateUrl: './form-bulilder.component.html',
  styleUrl: './form-bulilder.component.scss',
})
export class FormBulilderComponent {}
