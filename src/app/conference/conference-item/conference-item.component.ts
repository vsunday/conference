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
  
  itemStyle() {
    const classList = [
      '',
      'list-group-item-primary',
      'list-group-item-warning',
      'list-group-item-secondary'
    ]
    return 'list-group-item list-group-item-action ' + classList[this.conference.attendance];
  }
  
  onClick(event) {
    console.log(event);
    event.stopPropagation();
  }
}
