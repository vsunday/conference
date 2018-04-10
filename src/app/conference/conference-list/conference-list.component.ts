import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ConferenceService } from '../conference.service';
import { DataService } from '../../util/data.service';

import { Conference } from "../conference.model";

@Component({
  selector: 'app-conference-list',
  templateUrl: './conference-list.component.html',
  styleUrls: ['./conference-list.component.css']
})
export class ConferenceListComponent implements OnInit, OnDestroy {
  conferences: Conference[] = [];
  subs: Subscription;

  constructor(private cService: ConferenceService, private dataService: DataService) { }

  ngOnInit() {
    this.subs = this.cService.changed.subscribe(
      (conferences: Conference[]) => {
        this.conferences = conferences;
      })
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
