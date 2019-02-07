import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.scss']
})
export class Component3Component implements OnInit {

  constructor() { }
  title = 'message to be displayed in parent';
  @Output() MessageEvent = new EventEmitter<string>();
  sendMessage() {
    this.MessageEvent.emit (this.title);
  }
  ngOnInit() {
  }
}
