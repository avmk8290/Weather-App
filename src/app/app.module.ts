import { AccWeatherService } from './acc-weather.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FavoriteComponent } from './Favorite/Favorite.component';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http-wrapper.service';

const appRoutes =[
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'Favorite',
    component: FavoriteComponent
  },
  {
    path: 'Home',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpService , AccWeatherService ],
  bootstrap: [AppComponent,]
})
export class AppModule { }
