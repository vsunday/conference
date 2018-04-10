import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Conference } from '../conference.model';
import { ConferenceService } from '../conference.service';
import { DataService } from '../../util/data.service';

@Component({
  selector: 'app-conference-edit',
  templateUrl: './conference-edit.component.html',
  styleUrls: ['./conference-edit.component.css']
})
export class ConferenceEditComponent implements OnInit {
  @ViewChild('f') cForm: NgForm;
  editMode: boolean = false;
  index: number;
  selectedConference: Conference = null;

  constructor(private route: ActivatedRoute,
    private cService: ConferenceService, private dataService: DataService) { }

  ngOnInit() {
    this.cService.selectedIndex.subscribe(
      (index: number) => {
        this.editMode = true;
        this.index = index;
        this.selectedConference = this.cService.getConference(index);
        this.cForm.setValue(new Conference());
        this.cForm.reset(this.selectedConference);
      })
  }

  onSubmit(f: any) {
    const v = f.value;
    const newConference = new Conference(v.name, v.startdate, v.enddate, v.desc, v.url,
      v.location, v.participants, v.price);
    if (this.editMode) {
      this.cService.updateConference(this.index, newConference);
    } else {
      this.cService.addConference(newConference);
    }
    this.cForm.reset();
  }
  
  onClear() {
    this.editMode = false;
    this.index = null;
    this.cForm.reset();
    this.selectedConference = null;
  }
}
