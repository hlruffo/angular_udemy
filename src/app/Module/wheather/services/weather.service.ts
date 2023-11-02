import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey='d0f1163766973cfa400e4a76f2fd3bcd';

  constructor(
    private httpClient: HttpClient
  ) { }
  getWeatherData(cityName:string): Observable<any>{
    return this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`, {})
  }
}
