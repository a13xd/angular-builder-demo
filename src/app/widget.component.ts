import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget',
  template: '<ng-content></ng-content>',
})
export class WidgetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}