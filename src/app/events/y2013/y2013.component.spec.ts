import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Y2013Component } from './y2013.component';

describe('Y2013Component', () => {
  let component: Y2013Component;
  let fixture: ComponentFixture<Y2013Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Y2013Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Y2013Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
