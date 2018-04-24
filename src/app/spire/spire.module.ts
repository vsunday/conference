import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpireRoutingModule } from './spire-routing.module';

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
  ],
  exports: [],
  providers: []
})
export class SpireModule {}