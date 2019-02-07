import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scenario2',
  templateUrl: './scenario2.component.html',
  styleUrls: ['./scenario2.component.scss']
})
export class Scenario2Component implements OnInit {
   @Input ()
     sc1: any;
  constructor() { }
  ngOnInit() {
  }
}
