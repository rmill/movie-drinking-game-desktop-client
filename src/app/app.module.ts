import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IntroModule } from './intro/intro.module';
import { MovieModule } from './movie/movie.module';
import { CreditsModule } from './credits/credits.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    CreditsModule,
    FormsModule,
    HttpModule,
    IntroModule,
    MovieModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
