import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TranscRoutingModule } from './transc-routing.module';

import { JsonService } from '../util/json.service';
import { ThresholdService } from '../util/threshold.service';
import { SegmentService } from './segment/segment.service';

import { TranscComponent } from './transc.component';
import { SegmentComponent } from './segment/segment.component';
import { ItemComponent } from './segment/item/item.component';
import { DisplayTimePipe } from './segment/display-time.pipe';

@NgModule({
  declarations:[
    TranscComponent,
    SegmentComponent,
    ItemComponent,
    DisplayTimePipe
  ],
  imports:[
    CommonModule,
    FormsModule,
    NgbModule,
    TranscRoutingModule,
  ],
  exports:[],
  providers: [JsonService, ThresholdService, SegmentService],
})
export class TranscModule {}