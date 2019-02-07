import { Child12Component } from './child12/child12.component';
import { Parent12Component } from './parent12/parent12.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [Parent12Component, Child12Component],
  imports: [
    CommonModule
  ],
  exports: [Parent12Component, Child12Component]
})
export class Parent12Module { }
