import { Component, OnInit } from '@angular/core';
import { AccWeatherService } from '../acc-weather.service';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  subscription: Subscription = new Subscription();
  sunday: any;
  monday: any;
  tuesday: any;
  wednesday: any;
  thursday: any;

  country: string = "Israel";
  ChosenCity: any;
  CitysObject: any;
  MyCountry: any;
  CityWResoult: any;
  town: any;
 
  constructor(private WeatherService: AccWeatherService) {
  }

  ngOnInit() {
  }


  submitHandler() {
    let sub = this.WeatherService.getCities(this.country).subscribe(city => {
      this.ChosenCity = city;

    });
    this.subscription.add(sub);
     this.CitysObject = this.ChosenCity as object [];
     for(let i=0; i< this.CitysObject.length; i++){
       if(this.CitysObject[i].AdministrativeArea.LocalizedName === this.country)
       {
         this.MyCountry = this.CitysObject[i].Key;
         break;
       }
       }

       this.CityWResoult=this.WeatherService.GetWeather(this.MyCountry)

       this.town = this.CityWResoult as object [];
         this.TempetureByDays();
  }


  TempetureByDays() {
    this.sunday = this.town["DailyForecasts"]["0"].Temperature.Maximum.Value;
    this.monday = this.town["DailyForecasts"]["1"].Temperature.Maximum.Value;
    this.tuesday = this.town["DailyForecasts"]["2"].Temperature.Maximum.Value;
    this.wednesday = this.town["DailyForecasts"]["3"].Temperature.Maximum.Value;
    this.thursday = this.town["DailyForecasts"]["4"].Temperature.Maximum.Value;
  }

  ngOnDestroy(): void {
    //ALLWAYS UNSUBSCRIBE
    this.subscription.unsubscribe();
  }



}
