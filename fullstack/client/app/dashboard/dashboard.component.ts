import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ToastComponent } from '../shared/toast/toast.component';
import { DashBoardItem } from '../shared/models/dashboard-item.model';
import { MoodService } from '../services/mood.service';
import { MoodVectorService } from '../services/mood-vector.service';


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

  public mainChart = {
    lineChartLabels: [],
    lineChartData: [
      { data: [], label: 'Alex Happiness' },
      { data: [], label: 'Christof Happiness' }

    ]
  };
  public temperatureChart = {
    lineChartLabels: [],
    lineChartData: [
      { data: [], label: 'Temperature' },
      { data: [], label: 'Hydro' },
    ]
  };


  constructor(
    private _moodService: MoodService,
    private _moodVectorService: MoodVectorService,
    public toast: ToastComponent) { }

  ngOnInit() {
    this.isLoading = false;
    this.generateDay();
  }

  private generateDay() {

    for (let index = 1; index < 22; index++) {
      this.mainChart.lineChartLabels[index] = index + '/04/2018';
      this.temperatureChart.lineChartLabels[index] = index + '/04/2018';
      this.mainChart.lineChartData[0].data.push(this.generateRandom(50, 100, 2));
      this.mainChart.lineChartData[1].data.push(this.generateRandom(50, 100, 2));
      this.temperatureChart.lineChartData[0].data.push(this.generateRandom(16, 32, 2));
      this.temperatureChart.lineChartData[1].data.push(this.generateRandom(0, 50, 2));
    }
  }


  private generateRandom(min, max, decimalPlaces) {
    const rand = Math.random() * (max - min) + min;
    const power = Math.pow(10, decimalPlaces);
    return Math.floor(rand * power) / power;
  }


}
