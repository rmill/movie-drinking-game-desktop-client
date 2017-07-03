import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CreditsComponent } from './credits.component';

@NgModule({
  declarations: [ CreditsComponent ],
  exports: [ CreditsComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: []
})
export class CreditsModule { }
