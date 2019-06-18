import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetWeatherService {
  weatherEndpoint = 'http://localhost:3000/ps4';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getWeather(cityName: string): Observable<any> {
    return this.httpClient.post(this.weatherEndpoint, cityName, this.httpOptions);
  }

  constructor(private httpClient: HttpClient) { }
}
