import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../Weather.Service';
import { FormControl } from '@angular/forms';


const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sunday:any;
  monday:any;
  tuesday:any;
  wednesday:any;
  thursday:any;

  country: string = "Israel";
  ChosenCity:any;
  CitysObject : any;
  MyCountry : any;
  CityWResoult : any;
  town :any;
  Citys :any =[
    {
      "Version": 1,
      "Key": "328328",
      "Type": "City",
      "Rank": 10,
      "LocalizedName": "London",
      "Country": {
        "ID": "GB",
        "LocalizedName": "United Kingdom"
      },
      "AdministrativeArea": {
        "ID": "LND",
        "LocalizedName": "London"
      }
    },
    {
      "Version": 1,
      "Key": "55489",
      "Type": "City",
      "Rank": 35,
      "LocalizedName": "London",
      "Country": {
        "ID": "CA",
        "LocalizedName": "Canada"
      },
      "AdministrativeArea": {
        "ID": "ON",
        "LocalizedName": "Ontario"
      }
    },
    {
      "Version": 1,
      "Key": "329139",
      "Type": "City",
      "Rank": 41,
      "LocalizedName": "Londonderry",
      "Country": {
        "ID": "GB",
        "LocalizedName": "United Kingdom"
      },
      "AdministrativeArea": {
        "ID": "DRS",
        "LocalizedName": "Derry and Strabane"
      }
    },
    {
      "Version": 1,
      "Key": "2174076",
      "Type": "City",
      "Rank": 65,
      "LocalizedName": "Londonderry",
      "Country": {
        "ID": "US",
        "LocalizedName": "United States"
      },
      "AdministrativeArea": {
        "ID": "NH",
        "LocalizedName": "New Hampshire"
      }
    },
    {
      "Version": 1,
      "Key": "711822",
      "Type": "City",
      "Rank": 75,
      "LocalizedName": "London Colney",
      "Country": {
        "ID": "GB",
        "LocalizedName": "United Kingdom"
      },
      "AdministrativeArea": {
        "ID": "HRT",
        "LocalizedName": "Hertfordshire"
      }
    },
    {
      "Version": 1,
      "Key": "333298",
      "Type": "City",
      "Rank": 75,
      "LocalizedName": "London",
      "Country": {
        "ID": "US",
        "LocalizedName": "United States"
      },
      "AdministrativeArea": {
        "ID": "KY",
        "LocalizedName": "Kentucky"
      }
    },
    {
      "Version": 1,
      "Key": "335012",
      "Type": "City",
      "Rank": 75,
      "LocalizedName": "London",
      "Country": {
        "ID": "US",
        "LocalizedName": "United States"
      },
      "AdministrativeArea": {
        "ID": "OH",
        "LocalizedName": "Ohio"
      }
    },
    {
      "Version": 1,
      "Key": "2523034",
      "Type": "City",
      "Rank": 85,
      "LocalizedName": "London Apprentice",
      "Country": {
        "ID": "GB",
        "LocalizedName": "United Kingdom"
      },
      "AdministrativeArea": {
        "ID": "CON",
        "LocalizedName": "Cornwall"
      }
    },
    {
      "Version": 1,
      "Key": "2123173",
      "Type": "City",
      "Rank": 85,
      "LocalizedName": "London",
      "Country": {
        "ID": "US",
        "LocalizedName": "United States"
      },
      "AdministrativeArea": {
        "ID": "AR",
        "LocalizedName": "Arkansas"
      }
    },
    {
      "Version": 1,
      "Key": "2154402",
      "Type": "City",
      "Rank": 85,
      "LocalizedName": "London",
      "Country": {
        "ID": "US",
        "LocalizedName": "United States"
      },
      "AdministrativeArea": {
        "ID": "CA",
        "LocalizedName": "California"
      }
    }
  ];
  constructor(private WeatherService:WeatherService) { 
    //this.submitHandler();
  }
  

  submitHandler(){
    this.ChosenCity= this.WeatherService.GetCitys(this.country);
    console.log("ChosenCity"+ this.ChosenCity);
    this.CitysObject = this.ChosenCity as object [];
    console.log("dzdvzfdgfsdfd"+this.CitysObject);
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


TempetureByDays(){
  this.sunday = this.town["DailyForecasts"]["0"].Temperature.Maximum.Value;
  this.monday = this.town["DailyForecasts"]["1"].Temperature.Maximum.Value;
  this.tuesday = this.town["DailyForecasts"]["2"].Temperature.Maximum.Value;
  this.wednesday = this.town["DailyForecasts"]["3"].Temperature.Maximum.Value;
  this.thursday = this.town["DailyForecasts"]["4"].Temperature.Maximum.Value;
}
  ngOnInit() {
}


}
