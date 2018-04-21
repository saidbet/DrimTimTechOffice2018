import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { CatService } from '../services/cat.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { DashBoardItem } from '../shared/models/dashboard-item.model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {


  worker1: DashBoardItem = {
    _id: 'string',
    name: 'alex',
    arrivalTime: new Date(),
    distractionTime: 15,
    emptyChairTime: 25,
    state: 'happy',
    video: 'http://camera.ehps.ncsu.edu:8100/c8',
    idx: 'a'
  };
  worker2: DashBoardItem = {
    _id: 'string',
    name: 'christof',
    arrivalTime: new Date(),
    distractionTime: 15,
    emptyChairTime: 25,
    state: 'happy',
    video: 'http://localhost:8080/cam.mjpg',
    idx: 'a'
  };

  isLoading = true;
  isEditing = false;

  constructor(

    public toast: ToastComponent) { }

  ngOnInit() {
    this.isLoading = false;
  }


}
