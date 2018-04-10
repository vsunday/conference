import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Conference } from '../conference/conference.model';

@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient) {}
  
  private confUrl = 'https://ngrd-conf.firebaseio.com/conf.json';
  private dbUrl = 'https://ngrd-conf.firebaseio.com/conf/';
  
  getAllConferences(): Observable<Object> {
    return this.httpClient.get(this.confUrl).map(
      (response) => {return response;}
    );
  }
  
  addConference(conference: Conference) {
    return this.httpClient.post(this.confUrl, conference).subscribe(
      (response) => {console.log(response);},
      (error) => {console.log(error);}
    );
  }
  
  updateConference(conference: Conference) {
    const targetUrl = this.dbUrl + conference['id'] + '.json';
    return this.httpClient.patch(targetUrl, conference).subscribe(
      (response) => {console.log(response);},
      (error) => {console.log(error);}
    );
  }
  
  deleteConference(conference: Conference) {
    const targetUrl = this.dbUrl + conference['id'] + '.json';
    return this.httpClient.delete(targetUrl).subscribe(
      (response) => {console.log(response);},
      (error) => {console.log(error);}
    );
  }
  
  putAllConferences(conferences: Conference[]) {
    conferences.forEach(
      (conference) => {
        // this.addConference(conference);
        this.updateConference(conference);
      })
  }
}