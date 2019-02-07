import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child12',
  templateUrl: './child12.component.html',
  styleUrls: ['./child12.component.scss']
})
export class Child12Component implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  title: string = 'message to be displayed in parent';
  @Output() MessageEvent = new EventEmitter<string>();
  sendMessage() {
    this.MessageEvent.emit (this.title);
  }
  constructor() { }
ngOnInit() {
  }
}
