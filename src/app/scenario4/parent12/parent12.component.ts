import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent12',
  templateUrl: './parent12.component.html',
  styleUrls: ['./parent12.component.scss']
})
export class Parent12Component implements OnInit {
  title: string;
  constructor() { }

  ngOnInit() {
  }
  receiveMessage(data) {
    this.title = data;
    console.log('In parent: ', this.title);
  }
 }
