import { HttpService } from './http-wrapper.service';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class AccWeatherService {
  constructor(private http : HttpService){ //http helper
  }
  readonly getCitiesRequest :string = 'daily/5day/cities/autocomplete';
  ///////////////////////////////////remove any[TYPE]
  getCities (city: string): Observable<any[]>{
     /////////////////remove any[TYPE]
    return this.http.get<any[]>(`${this.getCitiesRequest}` , { q : city } );
  }
}
