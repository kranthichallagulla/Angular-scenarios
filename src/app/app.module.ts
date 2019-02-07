import { Scenario5Module } from './scenario5/scenario5.module';
import { Parent12Module } from './scenario4/parent12.module';

import { ParentModule } from './scenario3/parent.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Scenario1Module } from './scenario1/scenario1.module';
import { Scenario2Module } from './scenario2/scenario2.module';
import { S6component1Component } from './scenario6/s6component1/s6component1.component';
import { S6component2Component } from './scenario6/s6component1/s6component2/s6component2.component';
import { S6component3Component } from './scenario6/s6component1/s6component3/s6component3.component';



@NgModule({
  declarations: [
    AppComponent,
    S6component1Component,
    S6component2Component,
    S6component3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Scenario1Module,
    Scenario2Module,
    ParentModule,
    Parent12Module,
    Scenario5Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
