import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription,  Observable } from 'rxjs';

import { ConferenceService } from '../conference.service';
import { DataService } from '../../util/data.service';

import { Conference } from "../conference.model";

@Component({
  selector: 'app-conference-list',
  templateUrl: './conference-list.component.html',
  styleUrls: ['./conference-list.component.css']
})
export class ConferenceListComponent implements OnInit, OnDestroy {
  conferences: Observable<Conference[]>;
  subs: Subscription;

  constructor(private cService: ConferenceService, private dataService: DataService) {}

  ngOnInit() {
    this.conferences = this.cService.getConferences();
    this.subs = this.cService.changed.subscribe(
      (data) => {this.conferences = this.cService.getConferences();}
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
