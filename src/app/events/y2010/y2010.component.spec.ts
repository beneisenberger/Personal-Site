import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Y2010Component } from './y2010.component';

describe('Y2010Component', () => {
  let component: Y2010Component;
  let fixture: ComponentFixture<Y2010Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Y2010Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Y2010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
