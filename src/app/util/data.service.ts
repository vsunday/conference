import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Conference } from '../conference/conference.model';

@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient) {}
  
  private dbUrl = 'https://ngrd-conf.firebaseio.com/conf.json';
  
  // getDbUrl(): string {
  //   if (this.dbUrl == '') {
  //     this.httpClient.get('assets/config.json')
  //       .map((data) => {console.log(data); return data['dbUrl'];})
  //       .subscribe((dbUrl) => {this.dbUrl = dbUrl;})
  //   }
  //   return this.dbUrl;
  // }
  
  getAllConferences() {
    return this.httpClient.get(this.dbUrl).map(
      (response) => {return response;}
    );
  }
  
  postConference(conference: Conference) {
    return this.httpClient.post(this.dbUrl, conference).subscribe(
      (response) => {console.log(response);},
      (error) => {console.log(error);}
    );
  }
  
  putAllConferences(conferences: Conference[]) {
    return this.httpClient.put(this.dbUrl, conferences).subscribe(
      (response) => {console.log(response);},
      (error) => {console.log(error);}
    );
  }
}