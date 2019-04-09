import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DemoComponent } from './demo/demo.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { CustomDirective } from './custom.directive';
import { CustomButtonComponent } from './custom-button/custom-button.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatInputModule, MatCardModule, MatButtonModule ],
  entryComponents: [ CustomInputComponent, CustomButtonComponent ],
  declarations: [ AppComponent, HelloComponent, DemoComponent, CustomInputComponent, CustomDirective, CustomButtonComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
