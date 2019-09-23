import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Y2015Component } from './y2015.component';

describe('Y2015Component', () => {
  let component: Y2015Component;
  let fixture: ComponentFixture<Y2015Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Y2015Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Y2015Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
