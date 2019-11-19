import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage {

  constructor() {}

  inputCityName: String;
  cityName: String;

  saveChanges(){
    console.log('Salvo');
    
    //this.cityName = this.inputCityName;
    console.log(this.cityName);
    console.log(this.inputCityName);
  }

}
