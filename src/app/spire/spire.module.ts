import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { SpireRoutingModule } from './spire-routing.module';

import { SpireService } from './spire.service';

import { SpireComponent } from './spire.component';
import { StreaksViewComponent } from './streaks-view/streaks-view.component';

@NgModule({
  declarations: [
    SpireComponent,
    StreaksViewComponent,
  ],
  imports: [
    CommonModule,
    SpireRoutingModule,
    Ng2GoogleChartsModule,
  ],
  exports: [],
  providers: [SpireService]
})
export class SpireModule {}