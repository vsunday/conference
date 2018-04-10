import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { DataService } from '../util/data.service';

import { Conference } from './conference.model';

@Injectable()
export class ConferenceService {
  constructor(private dataService: DataService) {
    // this.conferences = [
    //   new Conference('01', 'GPU Technology Conferece', '3/26/2018', '3/29/2018', 'Hosted by NVIDIA', 'https://test.com', 'San Jose, CA', 'U', 100), 
    //   new Conference('02', 'Google I/O 2018', '5/8/2018', '5/10/2018', 'Google product event', 'https://test.co.jp', 'Mountain View, CA', 'U', 1000), 
    //   new Conference('03', 'WWDC 18', '6/8/2018', '6/10/2018', 'Developer event by Apple Inc.', 'https://test.com', 'San Jose, CA', 'U', 1000), 
    // ];
    this.dataService.getAllConferences().subscribe(
      (data) => {
        // this.conferences = Object.values(data).sort(
        //   (a,b) => {
        //     return new Date(a.startdate) <= new Date(b.startdate) ? -1 : 1;
        //   });
        const tmp = Object.values(data).sort(
          (a,b) => {
            return new Date(a.startdate) <= new Date(b.startdate) ? -1 : 1;
          });
          tmp.forEach(
            (conference) => {
              const s = new Date(conference.startdate); const e = new Date(conference.enddate);
              conference.startdate = (s.getMonth()+1) + '/' + s.getDate() + '/' + s.getFullYear();
              conference.enddate = (e.getMonth()+1) + '/' + e.getDate() + '/' + e.getFullYear();
              this.conferences.push(conference);
            })
        this.changed.next(this.conferences.slice());
      }
    )
  };
  
  conferences: Conference[] = [];
  
  selectedIndex = new Subject<number>();
  changed = new Subject<Conference[]>();
  
  getConferences() {
    this.conferences.sort(
      (a,b) => {
        return new Date(a.startdate) <= new Date(b.startdate) ? -1 : 1;
      });
    return this.conferences.slice();
  }
  
  getConference(n: number) {
    return this.conferences[n];
  }
  
  addConference(newConference: Conference) {
    this.conferences.push(newConference);
    this.changed.next(this.getConferences());
    this.dataService.putAllConferences(this.conferences);
  }
  
  updateConference(n: number, newConference: Conference) {
    this.conferences[n] = newConference;
    this.changed.next(this.getConferences());
    this.dataService.putAllConferences(this.conferences);
  }
  
  deleteConference(n: number) {
    this.conferences.splice(n,1);
    this.changed.next(this.getConferences());
    this.dataService.putAllConferences(this.conferences);
  }
}