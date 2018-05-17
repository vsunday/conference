import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription,  Subject } from 'rxjs';

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
  s: Subscription[];
  changeTouched = new Subject<any>();
  color: string;
  editMode: boolean = false;
  touched: boolean = false;

  constructor(private tService: ThresholdService) { }

  ngOnInit() {
    this.color = this.getColor();
    this.s = [this.tService.thresholdChange.subscribe(
      (x) => {
        this.threshold = x;
        this.color = this.getColor();
      }),
      this.changeTouched.subscribe(
        () => {
          this.color = this.getColor();
      })]
  }
  
 ngOnDestroy() {
   this.s.forEach(
     (element) => {element.unsubscribe();}
   );
 }
 
  getColor(): string {
    if (this.touched) {
      return 'blue';
    } else {
      const confidence = +this.item.confidence;
      return confidence > this.threshold ? 'black' : 'red';
    }
  }
 
 getWidth(): string {
   const length = this.item.content.length;
   return length * 0.75 + 'rem';
 }
 
 onDblclick() {
   this.editMode = !this.editMode;
   this.touched = true;
   this.changeTouched.next();
 }
}
