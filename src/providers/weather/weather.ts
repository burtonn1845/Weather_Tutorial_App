import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class WeatherProvider {

  apiKey = 'a12c5eaa380a3258c29b19a58e17e2b3';
  url;
  url2;
  url3;
  cName = 'London';

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.openweathermap.org/data/2.5/weather?q=';
    this.url3 = '&APPID=a12c5eaa380a3258c29b19a58e17e2b3';
    this.url2 = 'https://jsonplaceholder.typicode.com/posts';
  }

  getWeather(city){
    //console.log()
     return (this.http.get(this.url + city + this.url3))/*.pipe(map((res: Response) => res))*/;
  }

}
