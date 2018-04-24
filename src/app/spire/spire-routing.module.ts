import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpireComponent } from './spire.component';

const spireRoutes: Routes = [
  {path: '', component: SpireComponent},
]
  
@NgModule({
  imports: [RouterModule.forChild(spireRoutes)],
  exports: [RouterModule],
})
export class SpireRoutingModule {}