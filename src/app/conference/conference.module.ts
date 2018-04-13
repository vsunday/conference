import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ConferenceRoutingModule } from './conference-routing.module';

import { ConferenceComponent } from './conference.component';
import { ConferenceListComponent } from './conference-list/conference-list.component';
import { ConferenceItemComponent } from './conference-item/conference-item.component';
import { ConferenceEditComponent } from './conference-edit/conference-edit.component';

import { ConferenceService }  from './conference.service';
import { DataService } from '../util/data.service';


@NgModule({
  declarations:[
    ConferenceComponent,
    ConferenceListComponent,
    ConferenceItemComponent,
    ConferenceEditComponent,
  ],
  imports:[
    CommonModule,
    FormsModule,
    NgbModule,
    ConferenceRoutingModule,
  ],
  exports:[],
  providers: [ConferenceService, DataService],
})
export class ConferenceModule {}