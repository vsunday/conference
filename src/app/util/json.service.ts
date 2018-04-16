import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class JsonService {
  constructor(private httpClient: HttpClient) {};
  
  getJson(url: string): Observable<any> {
    return this.httpClient.get(url).map(
      (data) => {return data;},
      (error) => {console.log(error);}
    );
  }
}