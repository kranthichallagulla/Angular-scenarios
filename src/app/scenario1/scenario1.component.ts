import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario1',
  templateUrl: './scenario1.component.html',
  styleUrls: ['./scenario1.component.scss']
})
export class Scenario1Component implements OnInit {
  constructor() { }
  show(value: string) {
    console.log(value);
    }
  ngOnInit() {
  }
}
