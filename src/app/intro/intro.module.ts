import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { IntroComponent } from './intro.component';

@NgModule({
  declarations: [ IntroComponent ],
  exports: [ IntroComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ ]
})
export class IntroModule { }
