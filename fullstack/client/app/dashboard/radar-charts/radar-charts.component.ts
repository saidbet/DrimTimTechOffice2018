import { Component } from '@angular/core';

@Component({
  selector: 'app-radar-chart-demo',
  templateUrl: './radar-charts.component.html'
})
export class RadarChartDemoComponent {
  // Radar
  public radarChartLabels: Array<any> = ['Angry', 'Disgust', 'Fear', 'Happy', 'Sad', 'Surprise', 'Neutral'];
  public radarChartData: any = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Today' },
    { data: [65, 8, 90, 11, 56, 55, 40], label: 'Last week' },
    { data: [65, 59, 90, 51, 51, 58, 30], label: 'Last month' }
  ];
  public radarChartType: String = 'radar';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}