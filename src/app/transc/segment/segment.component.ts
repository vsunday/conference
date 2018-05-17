import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { SegmentService } from './segment.service';

import { Segment } from './segment.model';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.css']
})
export class SegmentComponent implements OnInit {
  @Input() segment: Segment;
  editMode: boolean = false;
  speaker: string;
  sub: Subscription;

  constructor(private sService: SegmentService) { }

  ngOnInit() {
    this.speaker = this.sService.speakers[this.segment.speaker_label];
    this.sub = this.sService.changeSpeakers.subscribe(
      () => {
        this.speaker = this.sService.speakers[this.segment.speaker_label];
      });
  }
  
  onChange() {
    this.sService.speakers[this.segment.speaker_label] = this.speaker;
    this.sService.changeSpeakers.next();
  }

}
