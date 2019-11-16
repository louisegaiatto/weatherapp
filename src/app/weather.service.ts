import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = '224a986a4077c868394b8b6df70444c2';
  url;


  constructor(public http: HttpClient) { 
    console.log('Helo weather service');
    this.http = http;
 }

  getWeather(latitude:String, longitude:String){

    return true//this.http.get('https://api.darksky.net/forecast/'+this.apiKey+'/'+latitude+','+longitude+'?exclude=alerts,minutely,hourly')
        //.map(res => res.json());

  }
}
