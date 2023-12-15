import { Component, OnInit } from '@angular/core';
import { BodyData, ContainerValue } from 'src/app/services/body-data.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  providers: [BodyData],
})
export class BodyComponent implements OnInit {
  // Main Variables
  titles: string[];
  selectedTitle: string;
  bodyData: BodyData;
  info: ContainerValue;

  constructor() {
    this.bodyData = new BodyData();
    this.selectedTitle = this.bodyData.getDefaultTitle();
    this.titles = this.bodyData.getTitles();
    this.info = this.bodyData.getDetails(this.selectedTitle);
  }

  ngOnInit(): void {}

  setSelectedTitle(title: string) {
    this.selectedTitle = title;
  }
}
