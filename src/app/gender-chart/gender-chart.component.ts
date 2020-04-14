import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'gender-chart',
  templateUrl: './gender-chart.component.html',
  styleUrls: ['./gender-chart.component.scss']
})
export class GenderChartComponent implements OnInit {

  doughnutChartType: ChartType = 'doughnut';
  doughnutChartLabels: Label[] = ['female', 'male'];
  doughnutChartData = [{
            data: [35, 65],
            backgroundColor: [
                'rgba(188, 93, 230, 1)',
                'rgba(94, 119, 255, 1)'

            ],
            borderColor: [
                'rgba(188, 93, 230, 1)',
                'rgba(94, 119, 255, 1)'
            ],
            borderWidth: 1
        }]

  doughnutChartOptions: ChartOptions = {
    responsive: true,
    cutoutPercentage: 65,
    legend: {
      display: false,
    }

  };

  constructor() { }

  ngOnInit(): void {
  }

}
