import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DemoComponent } from './demo/demo.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { CustomDirective } from './custom.directive';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { WidgetComponent } from './widget.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatInputModule, MatCardModule, MatButtonModule, BrowserAnimationsModule, DragDropModule ],
  entryComponents: [ CustomInputComponent, CustomButtonComponent ],
  declarations: [ AppComponent, HelloComponent, DemoComponent, CustomInputComponent, CustomDirective, CustomButtonComponent, WidgetComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
