import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { S6component3Component } from './s6component1/s6component3/s6component3.component';
import { S6component2Component } from './s6component1/s6component2/s6component2.component';
import { S6component1Component } from './s6component1/s6component1.component';

@NgModule({
  declarations: [S6component1Component, S6component2Component, S6component3Component],
  imports: [
    CommonModule
  ],
  exports: [S6component1Component, S6component2Component, S6component3Component]
})
export class Scenario6Module { }
