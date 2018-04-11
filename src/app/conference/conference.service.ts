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
        if (data != null) {
          Object.entries(data).forEach(
            (value) => {
              var conference = <Conference>value[1];
              if (conference['id'] == '' || conference['id'] == null) {
                conference['id'] = value[0];
              }
              tmp.push(conference);
          });
        };
        this.sortConference(tmp).forEach(
            (conference) => {
              const s = new Date(conference.startdate);
              conference.startdate = (s.getMonth()+1) + '/' + s.getDate() + '/' + s.getFullYear();
              if (conference.enddate != null && conference.enddate != '') {
                const e = new Date(conference.enddate);
                conference.enddate = (e.getMonth()+1) + '/' + e.getDate() + '/' + e.getFullYear();
              };
              this.conferences.push(conference);
            });
        this.changed.next(this.conferences.slice());
      }
    )
  };
  
  conferences: Conference[] = [];
  
  changed = new Subject<Conference[]>();
  
  getConferences() {
    this.dataService.getAllConferences().subscribe(
      (data) => {
        this.conferences = this.sortConference(Object.values(data));
        this.changed.next(this.conferences);
      }
    );
  }
  
  getConference(id: string): Conference {
    return this.conferences.filter(
      (conference) => {
        return conference.id == id;
      })[0];
  }
  
  addConference(newConference: Conference) {
    this.dataService.addConference(newConference).subscribe(
      (response) => {
        const id = response['name'];
        newConference.id = id;
        this.dataService.updateConference(newConference).subscribe(
          () => {
            this.getConferences();})
        });
  }
  
  updateConference(newConference: Conference) {
    this.dataService.updateConference(newConference).subscribe(
      () => {this.getConferences();});
  }
  
  deleteConference(conference: Conference) {
    this.dataService.deleteConference(conference).subscribe(
      () => {this.getConferences();})
  }
  
  sortConference(conferences: Conference[]): Conference[] {
    conferences.sort(
      (a,b) => {
        return new Date(a['startdate']) < new Date(b['startdate']) ? -1 : 1;
      });
    return conferences;
  }
}