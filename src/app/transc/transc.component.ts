import { Component, OnInit } from '@angular/core';

import { JsonService } from '../util/json.service';
import { ThresholdService } from '../util/threshold.service';

import { Segment } from './segment.model';
import { Item } from './item.model';

@Component({
  selector: 'app-transc',
  templateUrl: './transc.component.html',
  styleUrls: ['./transc.component.css']
})
export class TranscComponent implements OnInit {
  segments: Segment[] = [];
  threshold: number = 0.95;

  constructor(private jsonService: JsonService, private tService: ThresholdService) { }

  ngOnInit() {
    const url = 'assets/test-job2.json';
    const json = this.jsonService.getJson(url).subscribe(
      (data) => {
        data.forEach(
          (element) => {this.segments.push(element);})
      })
  }
  
  onChange() {
    this.tService.thresholdChange.next(this.threshold);
  }

}
