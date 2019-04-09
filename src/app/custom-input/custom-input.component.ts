import { Component, OnInit, Input } from '@angular/core';
import { WidgetComponent } from './../widget.component';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent extends WidgetComponent implements OnInit {
  @Input() data: any;

  constructor() {
    super();
  }

  ngOnInit() {
  }

}