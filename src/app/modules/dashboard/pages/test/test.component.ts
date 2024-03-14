import { Component } from '@angular/core';
import { TestcComponent } from '../../components/testc/testc.component';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [TestcComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {}
