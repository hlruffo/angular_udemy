import { ComponentFixture, TestBed } from '@angular/core/testing';

import { weatherHomeComponent } from './weather-home.component';

describe('WeatherHomeComponent', () => {
  let component: weatherHomeComponent;
  let fixture: ComponentFixture<weatherHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [weatherHomeComponent]
    });
    fixture = TestBed.createComponent(weatherHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
