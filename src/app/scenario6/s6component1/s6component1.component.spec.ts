import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S6component1Component } from './s6component1.component';

describe('S6component1Component', () => {
  let component: S6component1Component;
  let fixture: ComponentFixture<S6component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S6component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S6component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
