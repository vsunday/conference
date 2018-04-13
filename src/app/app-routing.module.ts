import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {path: 'conference', loadChildren: './conference/conference.module#ConferenceModule'},
  {path: 'transc', loadChildren: './transc/transc.module#TranscModule'},
  {path: '**', redirectTo: 'conference', pathMatch: 'full'},
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}