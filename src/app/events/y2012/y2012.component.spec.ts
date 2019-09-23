import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Y2012Component } from './y2012.component';

describe('Y2012Component', () => {
  let component: Y2012Component;
  let fixture: ComponentFixture<Y2012Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Y2012Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Y2012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
