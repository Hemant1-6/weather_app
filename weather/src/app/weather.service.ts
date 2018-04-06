import { Injectable } from '@angular/core';
import { CurrentWeather } from './current-weather';

@Injectable()
export class WeatherService {
   current : CurrentWeather = new CurrentWeather("New York" ,"80" , "assets/temp.png", "Sunny" , "85" , "78");
  constructor() { }
  weatherNow(){
    return  this.current;
  }
}
