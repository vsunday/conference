import { Component, OnInit } from '@angular/core';

import { SpireService } from './spire.service';

@Component({
  selector: 'app-spire',
  templateUrl: './spire.component.html',
  styleUrls: ['./spire.component.css']
})
export class SpireComponent implements OnInit {
  timelineData: any;
  breathData: any;
  stepData: any;
  caloryData: any;
  stressGauge: any;

  constructor(private sService: SpireService) { }

  ngOnInit() {
    this.timelineData = this.sService.timelineData;
    this.breathData = this.sService.breathData;
    this.stepData = this.sService.stepData;
    this.caloryData = this.sService.caloryData;
    this.stressGauge = this.sService.stressGauge;
  }

}
