import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConferenceComponent } from './conference.component';
import { ConferenceEditComponent } from './conference-edit/conference-edit.component';

const conferenceRoutes: Routes = [
  {path: '', component: ConferenceComponent},
]
  
@NgModule({
  imports: [RouterModule.forChild(conferenceRoutes)],
  exports: [RouterModule],
})
export class ConferenceRoutingModule {}