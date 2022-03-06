import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BejegyzesekComponent } from './bejegyzesek/bejegyzesek.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GetdataService } from  './services/getdata.service';
import { BejegyzesDetailComponent } from './bejegyzes-detail/bejegyzes-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BejegyzesekComponent,
    BejegyzesDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  providers: [
    GetdataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
