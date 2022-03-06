import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BejegyzesekComponent } from './bejegyzesek/bejegyzesek.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GetdataService } from  './services/getdata.service';
import { GetCommentsService } from  './services/get-comments.service';

import { BejegyzesDetailComponent } from './bejegyzes-detail/bejegyzes-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { PostComponent } from './post/post.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BejegyzesekComponent,
    BejegyzesDetailComponent,
    PostComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
  ],
  providers: [
    GetdataService,
    GetCommentsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
