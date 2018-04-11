import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
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
  selectedConference: Conference = new Conference();

  constructor(private route: ActivatedRoute, private router: Router,
    private cService: ConferenceService, private dataService: DataService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        const id = params['id'];
        this.editMode = id != null;
        if (this.editMode) {
          this.selectedConference = this.cService.getConference(id);
        };
      })
  }

  onSubmit(f: NgForm) {
    const v = f.value;
    const newConference = new Conference(v.name, v.startdate, v.enddate, v.desc, v.url,
      v.location, v.attendance, v.participants, v.price, v.id);
    if (this.editMode) {
      this.cService.updateConference(newConference);
    } else {
      this.cService.addConference(newConference);
    };
    this.cForm.reset();
    this.router.navigate(['/conference']);
  }
  
  onClear() {
    this.cForm.reset();
    this.editMode = false;
    this.selectedConference = null;
    this.router.navigate(['/conference']);
  }
  
  onDelete() {
    this.cService.deleteConference(this.selectedConference);
    this.router.navigate(['/conference']);
  }
}
