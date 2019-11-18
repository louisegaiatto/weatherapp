import { IonicModule, NavController } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { WeatherService } from '../weather.service';
import { OnInit} from '@angular/core';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: HomePage }])
  ],
  declarations: [HomePage]
})
export class HomePageModule implements OnInit {
  
  ngOnInit() {
    this.getWeather();
  }
  
  constructor(private weatherService: WeatherService) {
  
  }

  
  public weather;
  public city: "Paris";

 /*  search(formData: FormData){
    console.log(formData);
    this.ionicStorage.set("city", formData["city"]);
    
    this.weatherService.getWeatherFromApi("city").subscribe( weather => {
      this.weather = weather;
      console.log(weather);
    })

  } */


  getWeather(){
    
          this.weatherService.getWeatherFromApi(this.city).subscribe( weather => {
            this.weather = weather;
            console.log(weather);
          })
        }
  }
  

