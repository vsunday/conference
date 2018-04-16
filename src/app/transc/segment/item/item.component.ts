import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ThresholdService } from '../../../util/threshold.service';

import { Item } from './item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnDestroy {
  @Input() item: Item;
  threshold: number = 0.95;
  s: Subscription;
  color: string;
  editMode: false;
  touched: false;

  constructor(private tService: ThresholdService) { }

  ngOnInit() {
    this.color = this.getColor();
    this.s = this.tService.thresholdChange.subscribe(
      (x) => {
        this.threshold = x;
        this.color = this.getColor();
      })
  }
  
  getColor(): string {
    if (this.touched) {
      return 'blue';
    } else {
      const confidence = +this.item.confidence;
      return confidence > this.threshold ? 'black' : 'red';
    }
  }

 ngOnDestroy() {
   this.s.unsubscribe();
 }
 
 getWidth(): string {
   const length = this.item.content.length;
   return length * 0.75 + 'rem';
 }
}
