import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Y2014Component } from './y2014.component';

describe('Y2014Component', () => {
  let component: Y2014Component;
  let fixture: ComponentFixture<Y2014Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Y2014Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Y2014Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
