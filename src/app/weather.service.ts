import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {}

  getWeatherFromApi(){
    return this.http.get(
      //`http://api.weatherstack.com/current?access_key=5c904da7957828e1a8a7d29f957b7103&query=${city}`
      "http://api.weatherstack.com/current?access_key=5c904da7957828e1a8a7d29f957b7103&query=Porto%20Alegre"
      );
  }

  getData(): Observable<any> {
    let response1 = this.http.get("http://api.weatherstack.com/current?access_key=5c904da7957828e1a8a7d29f957b7103&query=Porto%20Alegre");
    return forkJoin([response1]);
  }

}
