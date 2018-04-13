import { Component, OnInit, Input } from '@angular/core';

import { Segment } from '../segment.model';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.css']
})
export class SegmentComponent implements OnInit {
  @Input() segment: Segment;

  constructor() { }

  ngOnInit() {
  }

}
