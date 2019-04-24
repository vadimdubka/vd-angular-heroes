import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {MessagesComponent} from './messages/messages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./in-memory-data.service";
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter/counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';

@NgModule({
  // list of declared components, directives, and pipes, that belongs to this module
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    MyCounterComponent
  ],
  // list of external modules that the app needs
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
    StoreModule.forRoot({ count: counterReducer }) // Registered the global state container that is available throughout your application
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
