import { HttpService } from './http-wrapper.service';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class AccWeatherService {
  constructor(private http : HttpService){ 
  }
  readonly getCitiesRequest :string = 'daily/5day/cities/autocomplete';
  readonly getWeatherRequest :string = 'daily/5day';
  getCities (city: string): Observable<any[]>{
    return this.http.get<any[]>(`${this.getCitiesRequest}` , { q : city } );
  }

  GetWeather (cityKey: string): Observable<any[]>{
    return this.http.get<any[]>(`${this.getWeatherRequest}` , { q : cityKey } );
  }
}
