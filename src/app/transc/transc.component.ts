import { Component, OnInit } from '@angular/core';

import { SegmentService } from './segment/segment.service';
import { ThresholdService } from '../util/threshold.service';

import { Segment } from './segment/segment.model';
import { Item } from './segment/item/item.model';

@Component({
  selector: 'app-transc',
  templateUrl: './transc.component.html',
  styleUrls: ['./transc.component.css']
})
export class TranscComponent implements OnInit {
  segments: Segment[] = [];
  threshold: number = 0.95;

  constructor(private segmentService: SegmentService, private tService: ThresholdService) { }

  ngOnInit() {
    this.segments = this.segmentService.segments;
  }
  
  onChange() {
    this.tService.thresholdChange.next(this.threshold);
  }
  
  onClick() {
    this.segmentService.download();
    // this.segmentService.downloadJson();
  }

}
