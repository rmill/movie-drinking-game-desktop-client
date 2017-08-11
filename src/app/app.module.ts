import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CreditsModule } from './credits/credits.module';
import { IntroModule } from './intro/intro.module';
import { MovieModule } from './movie/movie.module';
import { ElectronService } from './shared/service/electron.service';
import { GameService } from './shared/service/game.service';
import { WebsocketService } from './shared/service/websocket.service';

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
  providers: [ ElectronService, GameService, WebsocketService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

declare global {
  interface Window {
    require: any;
  }
}
