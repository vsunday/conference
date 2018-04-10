import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { DataService } from '../util/data.service';

import { Conference } from './conference.model';

@Injectable()
export class ConferenceService {
  constructor(private dataService: DataService) {
    this.dataService.getAllConferences().subscribe(
      (data) => {
        const tmp = [];
        Object.entries(data).forEach(
          (value) => {
            var conference = <Conference>value[1];
            if (conference['id'] == '' || conference['id'] == null) {
              conference['id'] = value[0];
            }
            tmp.push(conference);
        });
        this.sortConference(tmp).forEach(
            (conference) => {
              const s = new Date(conference.startdate); const e = new Date(conference.enddate);
              conference.startdate = (s.getMonth()+1) + '/' + s.getDate() + '/' + s.getFullYear();
              conference.enddate = (e.getMonth()+1) + '/' + e.getDate() + '/' + e.getFullYear();
              this.conferences.push(conference);
            });
        this.changed.next(this.conferences.slice());
      }
    )
  };
  
  conferences: Conference[] = [];
  
  selectedIndex = new Subject<number>();
  changed = new Subject<Conference[]>();
  
  getConferences() {
    this.dataService.getAllConferences().subscribe(
      (data) => {
        this.conferences = this.sortConference(Object.values(data));
        this.changed.next(this.conferences);
      });
  }
  
  getConference(n: number) {
    return this.conferences[n];
  }
  
  addConference(newConference: Conference) {
    this.dataService.addConference(newConference);
    this.getConferences();
  }
  
  updateConference(newConference: Conference) {
    this.dataService.updateConference(newConference);
    this.getConferences();
  }
  
  deleteConference(conference: Conference) {
    this.dataService.deleteConference(conference);
    this.getConferences();
  }
  
  sortConference(conferences: Conference[]): Conference[] {
    conferences.sort(
      (a,b) => {
        return new Date(a['startdate']) < new Date(b['startdate']) ? -1 : 1;
      });
    return conferences;
  }
}