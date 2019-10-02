import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.prod';
import { Injectable } from '@angular/core';


/**
 * @return HttpParams
 */
@Injectable()
export class HttpService {


    constructor(private http: HttpClient){
    }
    /**
     * @param url
     * @param data 
     * @return an `Observable` of the body as an `Object`.
     */
   get<T = any>(url: string, data?: Object , includeAPIkey :boolean = true) :Observable<T>{
        let params = {};
        if (data) {
            params = this.buildParamsQuery(data) 
        }
if(url ='daily/5day/cities/autocomplete'){
  return this.http.get<T>(`${environment.locaionsUrl}${url}` , {params});
}
else if (url='daily/5day'){
  return this.http.get<T>(`${environment.forecasts}${url}` , {params});
}
        
   }

   post<T = any>(url: string, body: string | object):Observable<T>{
     if( url ='daily/5day/cities/autocomplete')
     {
      return this.http.post<T>(`${environment.locaionsUrl}${url}` ,body)
     }
     if(url='daily/5day'){
      return this.http.post<T>(`${environment.forecasts}${url}` ,body);
     }
   }


/**
 * @param Object
 * @return HttpParams
 */
   private buildParamsQuery(data , includeAPIkey : boolean = true) : HttpParams{
    const dataKeys = Object.keys(data);
    let params = new HttpParams();
    dataKeys.forEach(prop => {
        params = params.set(prop , data[prop])
    })
    if(includeAPIkey){
      params = params.set('apikey' , environment.apiKey)
    }

    return params;
   }

}