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
  @Input() index: number;

  constructor(private cService: ConferenceService) { }

  ngOnInit() {
  }

  onSelect() {
    this.cService.selectedIndex.next(this.index);
  }
  
  onDelete() {
    this.cService.deleteConference(this.index);
  }
}
