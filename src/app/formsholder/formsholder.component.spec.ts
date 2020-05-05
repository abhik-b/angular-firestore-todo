import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsholderComponent } from './formsholder.component';

describe('FormsholderComponent', () => {
  let component: FormsholderComponent;
  let fixture: ComponentFixture<FormsholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
