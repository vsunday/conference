import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Conference } from '../conference/conference.model';

@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient) {}
  
  private confUrl = 'https://ngrd-conf.firebaseio.com/conf.json';
  private dbUrl = 'https://ngrd-conf.firebaseio.com/conf/';
  
  getAllConferences(): Observable<any> {
    return this.httpClient.get(this.confUrl).pipe(map(
      (response) => {return response;}
    ));
  }
  
  addConference(conference: Conference): Observable<any> {
    return this.httpClient.post(this.confUrl, conference);
  }
  
  updateConference(conference: Conference): Observable<any> {
    const targetUrl = this.dbUrl + conference['id'] + '.json';
    return this.httpClient.patch(targetUrl, conference);
  }
  
  deleteConference(conference: Conference): Observable<Object> {
    const targetUrl = this.dbUrl + conference['id'] + '.json';
    return this.httpClient.delete(targetUrl);
  }
  
  putAllConferences(conferences: Conference[]) {
    conferences.forEach(
      (conference) => {
        this.addConference(conference).subscribe();
        // this.updateConference(conference);
      })
  }
}