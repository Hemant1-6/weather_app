import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CurrentComponent } from './current/current.component';
import { ForecastComponent } from './forecast/forecast.component';
import { weatherRouting } from './weather.routing';
import { WeatherService } from './weather.service';
import { HttpModule } from '@angular/http';
import {ResolveLocationService} from './resolve-location.service';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrentComponent,
    ForecastComponent
  ],
  imports: [
    BrowserModule,
    weatherRouting,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [WeatherService,
  ResolveLocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
