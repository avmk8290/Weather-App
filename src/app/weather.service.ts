import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class WeatherService {
 Forcast : any ={
  "Headline": {
    "EffectiveDate": "2019-09-27T20:00:00-04:00",
    "EffectiveEpochDate": 1569628800,
    "Severity": 2,
    "Text": "Thunderstorms in the area Friday evening through Saturday morning",
    "Category": "thunderstorm",
    "EndDate": "2019-09-28T14:00:00-04:00",
    "EndEpochDate": 1569693600,
    "MobileLink": "http://m.accuweather.com/en/ca/london/n6b/extended-weather-forecast/55489?lang=en-us",
    "Link": "http://www.accuweather.com/en/ca/london/n6b/daily-weather-forecast/55489?lang=en-us"
  },
  "DailyForecasts": [
    {
      "Date": "2019-09-24T07:00:00-04:00",
      "EpochDate": 1569322800,
      "Temperature": {
        "Minimum": {
          "Value": 55,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 71,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 3,
        "IconPhrase": "Partly sunny",
        "HasPrecipitation": false
      },
      "Night": {
        "Icon": 35,
        "IconPhrase": "Partly cloudy",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://m.accuweather.com/en/ca/london/n6b/daily-weather-forecast/55489?day=1&lang=en-us",
      "Link": "http://www.accuweather.com/en/ca/london/n6b/daily-weather-forecast/55489?day=1&lang=en-us"
    },
    {
      "Date": "2019-09-25T07:00:00-04:00",
      "EpochDate": 1569409200,
      "Temperature": {
        "Minimum": {
          "Value": 55,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 75,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 14,
        "IconPhrase": "Partly sunny w/ showers",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Light"
      },
      "Night": {
        "Icon": 36,
        "IconPhrase": "Intermittent clouds",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://m.accuweather.com/en/ca/london/n6b/daily-weather-forecast/55489?day=2&lang=en-us",
      "Link": "http://www.accuweather.com/en/ca/london/n6b/daily-weather-forecast/55489?day=2&lang=en-us"
    },
    {
      "Date": "2019-09-26T07:00:00-04:00",
      "EpochDate": 1569495600,
      "Temperature": {
        "Minimum": {
          "Value": 45,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 67,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 14,
        "IconPhrase": "Partly sunny w/ showers",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Moderate"
      },
      "Night": {
        "Icon": 34,
        "IconPhrase": "Mostly clear",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://m.accuweather.com/en/ca/london/n6b/daily-weather-forecast/55489?day=3&lang=en-us",
      "Link": "http://www.accuweather.com/en/ca/london/n6b/daily-weather-forecast/55489?day=3&lang=en-us"
    },
    {
      "Date": "2019-09-27T07:00:00-04:00",
      "EpochDate": 1569582000,
      "Temperature": {
        "Minimum": {
          "Value": 60,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 68,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 6,
        "IconPhrase": "Mostly cloudy",
        "HasPrecipitation": false
      },
      "Night": {
        "Icon": 15,
        "IconPhrase": "Thunderstorms",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Light"
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://m.accuweather.com/en/ca/london/n6b/daily-weather-forecast/55489?day=4&lang=en-us",
      "Link": "http://www.accuweather.com/en/ca/london/n6b/daily-weather-forecast/55489?day=4&lang=en-us"
    },
    {
      "Date": "2019-09-28T07:00:00-04:00",
      "EpochDate": 1569668400,
      "Temperature": {
        "Minimum": {
          "Value": 55,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 70,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 7,
        "IconPhrase": "Cloudy",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Moderate"
      },
      "Night": {
        "Icon": 36,
        "IconPhrase": "Intermittent clouds",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://m.accuweather.com/en/ca/london/n6b/daily-weather-forecast/55489?day=5&lang=en-us",
      "Link": "http://www.accuweather.com/en/ca/london/n6b/daily-weather-forecast/55489?day=5&lang=en-us"
    }
  ]
}
ApiKey = 	'c5ri44zCIThpVyOT5etSCoeH1s6r6gEQ';
url;
secondUrl;
  constructor(private Http:HttpClient) { 
    this.url = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/';
this.secondUrl ='http://dataservice.accuweather.com/locations/v1/cities/autocomplete?';
  }

  Citys : any;
Weather:any;
  GetCitys (city: string): Observable<any[]>{
    debugger
    let fullUrl = this.secondUrl +'apikey='+this.ApiKey+'&q='+city;
    this.Citys=this.Http.get<any[]>(fullUrl);
    return this.Citys;
  }


  GetWeather (cityKey: string){
    //return this.Forcast;
    return this.Http.get(this.url + cityKey+'apikey='+this.ApiKey).subscribe(data=>{this.Weather = data})
  }

}
