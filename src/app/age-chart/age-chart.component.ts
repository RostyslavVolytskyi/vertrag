import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'age-chart',
  templateUrl: './age-chart.component.html',
  styleUrls: ['./age-chart.component.scss']
})
export class AgeChartComponent implements OnInit {

  barChartType: ChartType = 'bar';
  barChartLabels: Label[] = ['19-25', '26-30', '31-40', '41+'];
  barChartData = [
    {
        label: "female",
        backgroundColor: 'rgba(94, 119, 255, 1)',
        hoverBackgroundColor: 'rgba(56, 86, 255, 1)',
        data: [10, 25, 45, 20]
    },
    {
        label: "male",
        backgroundColor: 'rgba(188, 93, 230, 1)',
        hoverBackgroundColor: 'rgba(189, 35, 255, 1)',
        data: [5, 10, 26, 15]
    },
]

  barChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      display: false,
    },
    scales: {
      yAxes: [{
        ticks: {
          min: 0,
        }
      }]
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
