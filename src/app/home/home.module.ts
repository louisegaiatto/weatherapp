import { IonicModule, NavController } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { LoadingController } from '@ionic/angular';
import { WeatherService } from '../weather.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: HomePage }])
  ],
  declarations: [HomePage]
})
export class HomePageModule {

  data1: any;

  constructor(public api: WeatherService, public loadingController: LoadingController) {}

  async getData() {
  const loading = await this.loadingController.create({
    message: 'Loading'
  });
  await loading.present();
  this.api.getData()
    .subscribe(res => {
      console.log(res);
      this.data1 = res[0];
      loading.dismiss();
    }, err => {
      console.log(err);
      loading.dismiss();
    });
  }

  ngOnInit() {
    this.getData();
  }

}
