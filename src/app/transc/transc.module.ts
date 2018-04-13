import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TranscRoutingModule } from './transc-routing.module';

import { JsonService } from '../util/json.service';
import { ThresholdService } from '../util/threshold.service';

import { TranscComponent } from './transc.component';
import { SegmentComponent } from './segment/segment.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations:[
    TranscComponent,
    SegmentComponent,
    ItemComponent
  ],
  imports:[
    CommonModule,
    FormsModule,
    NgbModule,
    TranscRoutingModule,
  ],
  exports:[],
  providers: [JsonService, ThresholdService],
})
export class TranscModule {}