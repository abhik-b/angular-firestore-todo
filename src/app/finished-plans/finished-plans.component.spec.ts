import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedPlansComponent } from './finished-plans.component';

describe('FinishedPlansComponent', () => {
  let component: FinishedPlansComponent;
  let fixture: ComponentFixture<FinishedPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishedPlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishedPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
