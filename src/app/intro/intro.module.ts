import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IntroComponent } from './intro.component';

@NgModule({
  declarations: [ IntroComponent ],
  exports: [ IntroComponent ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [ ]
})
export class IntroModule { }
