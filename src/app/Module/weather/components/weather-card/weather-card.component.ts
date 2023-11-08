import { WeatherDatas } from './../../../../Models/intefaces/WeatherDatas';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: []
})
export class WeatherCardComponent implements OnInit {
  
  
  @Input() WeatherDatasInput!: WeatherDatas;


  ngOnInit(): void {
    console.log("Dados recebidos do componente pai:",
    this.WeatherDatasInput);
  }
}
