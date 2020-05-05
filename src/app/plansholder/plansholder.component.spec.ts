import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansholderComponent } from './plansholder.component';

describe('PlansholderComponent', () => {
  let component: PlansholderComponent;
  let fixture: ComponentFixture<PlansholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlansholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
