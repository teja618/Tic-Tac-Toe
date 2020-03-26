import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppSquareComponent } from './app-square/app-square.component';
import { AppBoardComponent } from './app-board/app-board.component';

@NgModule({
  declarations: [
    AppComponent,
    AppSquareComponent,
    AppBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
