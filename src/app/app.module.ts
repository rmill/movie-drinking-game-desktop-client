import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { IntroModule } from './intro/intro.module';
import { MovieComponent } from './movie/movie.component';
import { MovieModule } from './movie/movie.module';
import { AnimateService } from './shared/service/animate.service';
import { DataService } from './shared/service/data.service';
import { ElectronService } from './shared/service/electron.service';
import { GameService } from './shared/service/game.service';
import { PushNotificationService } from './shared/service/push-notification.service';
import { StatisticsService } from './shared/service/statistics.service';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'intro' },
  { path: 'intro', component: IntroComponent },
  { path: 'movie', component: MovieComponent }
];

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    IntroModule,
    MovieModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AnimateService,
    DataService,
    ElectronService,
    GameService,
    PushNotificationService,
    StatisticsService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

declare global {
  interface Window {
    require: any;
  }
}
