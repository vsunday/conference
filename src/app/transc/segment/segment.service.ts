import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { saveAs } from 'file-saver/FileSaver';

import { JsonService } from '../../util/json.service';

import { Segment } from './segment.model';
import { Item } from './item/item.model';

@Injectable()
export class SegmentService {
  constructor(private jsonService: JsonService, private httpClient: HttpClient) {
    const url = 'assets/test-job2.json';
    this.init(url);
  }
  
  segments: Segment[] = [];
  
  //initial load
  private init(url: string) {
    this.jsonService.getJson(url).subscribe(
      (data) => {
        data.forEach(
          (element) => {this.segments.push(element);}
        )});
  }
  
  //save or output segments info
  private outputSegmentsData(): Object[] {
    let result = [];
    for (let i=0; i<this.segments.length; i++) {
      const segment = this.segments[i];
      const speaker_label = segment.speaker_label;
      let items = [];
      for (let j=0; j<segment.items.length; j++) {
        items.push(segment.items[j].content);
      }
      const line = [speaker_label, items.join(' ')].join('\t');
      result.push(line);
    }
    return result;
  }
  
  download() {
    const data = this.outputSegmentsData();
    const filename = 'output.txt';
    saveAs(new Blob([data.join('\r')]), filename);
  }
  
  downloadJson() {
    const filename = 'output.json';
    const data = JSON.stringify(this.segments);
    saveAs(new Blob([data]), filename);
  }
}