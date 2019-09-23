import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Y2011Component } from './y2011.component';

describe('Y2011Component', () => {
  let component: Y2011Component;
  let fixture: ComponentFixture<Y2011Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Y2011Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Y2011Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
