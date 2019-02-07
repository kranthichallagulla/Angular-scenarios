import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Parent12Component } from './parent12.component';

describe('Parent12Component', () => {
  let component: Parent12Component;
  let fixture: ComponentFixture<Parent12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Parent12Component ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(Parent12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
