import { Component, OnInit, Input } from '@angular/core';

import { ConferenceService } from '../conference.service';
import { Conference } from '../conference.model';

@Component({
  selector: 'app-conference-item',
  templateUrl: './conference-item.component.html',
  styleUrls: ['./conference-item.component.css']
})
export class ConferenceItemComponent implements OnInit {
  @Input() conference: Conference;

  constructor(private cService: ConferenceService) { }

  ngOnInit() {
  }
}
