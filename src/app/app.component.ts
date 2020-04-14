import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  infoItems = [
    {title: 'Employees total', value: '3.100', iconClass: 'employees'},
    {title: 'Contracts total', value: '2.588', iconClass: 'contracts'},
    {title: 'Documentations', value: '+455', iconClass: 'documentations'},
    {title: 'Consultations', value: '1.200', iconClass: 'consultations'}
  ];
}
