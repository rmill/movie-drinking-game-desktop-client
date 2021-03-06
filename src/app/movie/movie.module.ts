import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MovieComponent } from './movie.component';
import { MovieCreditsComponent } from './credits/movie-credits.component';
import { MovieQuestionComponent } from './question/movie-question.component';

@NgModule({
  declarations: [
    MovieComponent,
    MovieCreditsComponent,
    MovieQuestionComponent
  ],
  exports: [ MovieComponent ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: []
})
export class MovieModule { }
