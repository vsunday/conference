import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

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
  speakers: Object = {};
  changeSpeakers = new Subject<string>();
  
  //initial load
  private init(url: string) {
    this.jsonService.getJson(url).subscribe(
      (data) => {
        data.forEach(
          (element) => {
            this.segments.push(element);
            if (this.speakers[element.speaker_label] == null) {
              this.speakers[element.speaker_label] = element.speaker_label;
            }
        });
      });
  }
  
  //save or output segments info
  private outputSegmentsData(): Object[] {
    let result = [];
    for (let i=0; i<this.segments.length; i++) {
      const segment = this.segments[i];
      const speaker_label = this.speakers[segment.speaker_label];
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