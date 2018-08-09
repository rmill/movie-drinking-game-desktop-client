import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MovieComponent } from './movie.component';
import { MovieQuestionComponent } from './question/movie-question.component';
import { MovieDrinksComponent } from './drinks/movie-drinks.component';

@NgModule({
  declarations: [ MovieComponent, MovieDrinksComponent, MovieQuestionComponent ],
  exports: [ MovieComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: []
})
export class MovieModule { }
