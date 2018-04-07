import { Injectable } from '@angular/core';
import { CurrentWeather } from './current-weather';
import {Http , Response} from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class WeatherService {
   current : CurrentWeather = new CurrentWeather("New York" ,"80" , "assets/temp.png", "Sunny" , "85" , "78");
  constructor(private http : Http) { }

  weatherNow(){
    return  this.current;
  }

  localWeather(lat : String , lon : String){
    return this.http.get("http://api.openweathermap.org/data/2.5/weather?lat="+ lat + "&lon="+ lon +
  "&appid=0f3fb9fa31ad3d41f1bb2bd0841c3f2f&units=imperial").map((response : Response) => response.json());
  }
}
