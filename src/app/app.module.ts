import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { ConferenceModule } from './conference/conference.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { ConferenceService }  from './conference/conference.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ConferenceModule,
    NgbModule.forRoot(),
  ],
  providers: [ConferenceService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
