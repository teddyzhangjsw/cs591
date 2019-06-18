import { Component } from '@angular/core';
import {WEATHER} from './models/weatherModel';
import {GetWeatherService} from './services/getWeather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'PS6';
  private weatherDisplay: WEATHER = null;

  city = {
    name: ''
  };


  getWeather(): void {
    this.weatherService.getWeather(this.city.name.toString())
      .subscribe(weatherDisplay =>
        this.weatherDisplay = weatherDisplay);
  }

  constructor(private weatherService: GetWeatherService) {

  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {

  }
}
