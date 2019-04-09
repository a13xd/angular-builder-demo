import {
  Component, ComponentFactoryResolver, OnInit, ViewChild, ViewChildren, ViewContainerRef,
  QueryList, AfterViewInit
} from '@angular/core';

import { CustomItem } from './../custom-item';
import { CustomDirective } from './../custom.directive';
import { CustomInputComponent } from './../custom-input/custom-input.component';
import { CustomButtonComponent } from './../custom-button/custom-button.component';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, AfterViewInit {
  @ViewChild(CustomDirective) customizer: CustomDirective;
  // public items;
  // @ViewChildren('dynamic', {read: ViewContainerRef}) public targets: QueryList<ViewContainerRef>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    // this.items = [];
  }

  ngAfterViewInit() {
    // for (let i = 0; i < this.targets.toArray().length; i += 1) {
    //   const { component, data } = this.items[i];
    //   const target = this.targets.toArray()[i];
    //   const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    //   const componentRef = target.createComponent(componentFactory);
    //   (componentRef.instance as any).data = data;
    // }
  }

  addButton() {
    this.addComponent(new CustomItem(CustomButtonComponent, { value: 'Custom Button' }));
  }

  addInput() {
    this.addComponent(new CustomItem(CustomInputComponent, { value: 'Custom Input' }));
  }

  addComponent(item: CustomItem) {
    const view = this.customizer.view;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(item.component);

    const componentRef = view.createComponent(componentFactory);
    (componentRef.instance as any).data = item.data;
  }

  loadComponent(): void {
    // const view = this.customizer.view;
    // const componentFactory = this.componentFactoryResolver.resolveComponentFactory(CustomInputComponent);

    // const componentRef = view.createComponent(componentFactory);
    // const componentRef1 = view.createComponent(componentFactory);
  }
}