import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S6component3Component } from './s6component3.component';

describe('S6component3Component', () => {
  let component: S6component3Component;
  let fixture: ComponentFixture<S6component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S6component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S6component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
