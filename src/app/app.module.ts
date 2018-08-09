import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CreditsModule } from './credits/credits.module';
import { IntroModule } from './intro/intro.module';
import { MovieModule } from './movie/movie.module';
import { AnimateService } from './shared/service/animate.service';
import { ElectronService } from './shared/service/electron.service';
import { GameService } from './shared/service/game.service';
import { WebsocketService } from './shared/service/websocket.service';
import { IntroComponent } from './intro/intro.component';
import { MovieComponent } from './movie/movie.component';
import { CreditsComponent } from './credits/credits.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'intro' },
  { path: 'intro', component: IntroComponent },
  { path: 'movie', component: MovieComponent },
  { path: 'credits', component: CreditsComponent }
];

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    CreditsModule,
    FormsModule,
    HttpModule,
    IntroModule,
    MovieModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ AnimateService, ElectronService, GameService, WebsocketService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

declare global {
  interface Window {
    require: any;
  }
}
