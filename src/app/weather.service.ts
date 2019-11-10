import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = '770c7f2c8emshfc08585e2582a3ap1ee0e8jsn5717aae4fd49';
  url;


  constructor() { 
    console.log('Helo weather service');
    this.url = 'https://community-open-weather-map.p.rapidapi.com/weather';
  }

  getWeather(city, state){
    return true;

  }
}
