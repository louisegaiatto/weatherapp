import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})

export class HomePage implements OnInit  {
  
  public weather:any = {};
  public city:string;

  constructor(private weatherService: WeatherService, private activeRoute: ActivatedRoute) {
    console.log('HomePageModule constructor');
  }

  getWeather() {
    console.log('HomePageModule getWeather', this.city);

    if (!this.city) {
      throw new Error('City is required and is a String');
    }

    this.weatherService
        .getWeatherFromApi(this.city)
        .subscribe( weather => {
          this.weather = weather;
          console.log(this.weather);
        });
  }

  ngOnInit() {
      console.log('ngOnInit');
      this.city = this.activeRoute.snapshot.paramMap.get('cityName');
      this.getWeather();
  }
}
