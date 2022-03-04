import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BejegyzesekComponent } from './bejegyzesek/bejegyzesek.component';

@NgModule({
  declarations: [
    AppComponent,
    BejegyzesekComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
