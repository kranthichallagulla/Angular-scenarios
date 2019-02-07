import { Component3Component } from './component1/component2/component3/component3.component';
import { Component2Component } from './component1/component2/component2.component';
import { Component1Component } from './component1/component1.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Component1Component, Component2Component, Component3Component],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [Component1Component, Component2Component, Component3Component]
})
export class Scenario5Module { }
