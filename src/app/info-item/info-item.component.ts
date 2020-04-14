import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'info-item',
  templateUrl: './info-item.component.html',
  styleUrls: ['./info-item.component.scss']
})
export class InfoItemComponent implements OnInit {

  @Input() infoItem: any;

  constructor() { }

  ngOnInit(): void {
  }

}
