import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) {}

  getWeatherFromApi(city: string){
    return this.httpClient.get(`http://api.weatherstack.com/current?access_key=5c904da7957828e1a8a7d29f957b7103&query=${city}`);
  }
}
