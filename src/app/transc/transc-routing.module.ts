import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TranscComponent } from './transc.component';

const transcRoutes: Routes = [
  {path: '', component: TranscComponent},
]

@NgModule({
  imports: [RouterModule.forChild(transcRoutes)],
  exports: [RouterModule],
})
export class TranscRoutingModule {}