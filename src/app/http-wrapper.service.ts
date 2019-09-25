import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.prod';
import { Injectable } from '@angular/core';


/**
 * provide pipeline for http requests using HttpClient
 * @return HttpParams
 */
@Injectable()
export class HttpService {


    constructor(private http: HttpClient){
    }
    /**
     * @param url
     * @param data - Optional - type of Object
     * @return an `Observable` of the body as an `Object`.
     */
   get<T = any>(url: string, data?: Object , includeAPIkey :boolean = true) :Observable<T>{
        let params = {};
        if (data) {
            params = this.buildParamsQuery(data) 
        }

        return this.http.get<T>(`${environment.baseUrl}${url}` , {params});
   }

   post<T = any>(url: string, body: string | object):Observable<T>{
     return this.http.post<T>(`${environment.baseUrl}${url}` ,body);
   }


/**
 * Build params query for url requests
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