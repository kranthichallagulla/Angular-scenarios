import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S6component2Component } from './s6component2.component';

describe('S6component2Component', () => {
  let component: S6component2Component;
  let fixture: ComponentFixture<S6component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S6component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S6component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
