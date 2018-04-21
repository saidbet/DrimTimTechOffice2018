import { Component } from '@angular/core';

@Component({
  selector: 'app-radar-chart-demo',
  templateUrl: './radar-charts.component.html'
})
export class RadarChartDemoComponent {
  // Radar
  // {0: 'angry', 1: 'disgust', 2: 'fear', 3: 'happy', 4: 'sad', 5: 'surprise', 6: 'neutral'}
  public radarChartLabels: string[] = ['Angry', 'Disgust', 'Fear', 'Happy', 'Sad', 'Surprise', 'Neutral'];

  public radarChartData: any = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Today' },
    { data: [18, 59, 10, 81, 16, 55, 40], label: 'Last week' },
    { data: [65, 59, 90, 51, 86, 55, 40], label: 'Last month' }
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