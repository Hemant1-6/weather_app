import { Injectable } from '@angular/core';
import { CurrentWeather } from './current-weather';
import {Http , Response} from '@angular/http';
import 'rxjs/Rx';
import {Forecast} from './forecast';

@Injectable()
export class WeatherService {
   myWeather : CurrentWeather ;
   location
   constructor(private http : Http) { }

  localWeather(){
   return new Promise ((res , rej) => {
    navigator.geolocation.getCurrentPosition((pos)=>{
      this.location = pos.coords ;
      const lat = this.location.latitude;
      const lon = this.location.longitude;
      return this.http.get("http://api.openweathermap.org/data/2.5/weather?lat="+ lat + "&lon="+ lon +
      "&appid=0f3fb9fa31ad3d41f1bb2bd0841c3f2f&units=metric").map((response : Response) => response.json()).toPromise
      ().then((data)=>{
        this.myWeather = new CurrentWeather(data.name,data.main.temp,
          data.weather[0].icon,data.weather[0].description,
        data.main.temp_max,data.main.temp_min);
        res(this.myWeather);
      });
   })
  })
 }

   cityWeather(city :string){
     return this.http.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=0f3fb9fa31ad3d41f1bb2bd0841c3f2f&units=metric").map(
       (response : Response) => response.json()
     );
   }

   forcastWeather(city : string){
     return this.http.get("http://api.openweathermap.org/data/2.5/forecast?q="+city+
       "&appid=0f3fb9fa31ad3d41f1bb2bd0841c3f2f&units=metric").map((response : Response) => response.json());
   }
}

