import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBulilderComponent } from './form-bulilder.component';

describe('FormBulilderComponent', () => {
  let component: FormBulilderComponent;
  let fixture: ComponentFixture<FormBulilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormBulilderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormBulilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
