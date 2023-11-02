import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherDatas } from 'src/app/Models/intefaces/WeatherDatas';

@Component({
  selector: 'app-wheather-home',
  templateUrl: './wheather-home.component.html',
  styleUrls: []
})
export class WheatherHomeComponent implements OnInit {
  initialCityName = 'Rio de Janeiro';
  weatherDatas!: WeatherDatas;

  constructor(private weatherService: WeatherService){}

  ngOnInit(): void{
    this.getWeatherDatas(this.initialCityName);
  }


  getWeatherDatas(cityName: string): void{
    this.weatherService.getWeatherDatas(cityName).subscribe({
        next:(response: any) =>{
          response && (this.weatherDatas =response)
          console.log(this.weatherDatas)
        },
        error:(error: any)=>console.log(error),
      });
  }

}
