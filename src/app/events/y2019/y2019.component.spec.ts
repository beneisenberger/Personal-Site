import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Y2019Component } from './y2019.component';

describe('Y2019Component', () => {
  let component: Y2019Component;
  let fixture: ComponentFixture<Y2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Y2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Y2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
