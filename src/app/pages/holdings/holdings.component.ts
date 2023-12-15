import { Component } from '@angular/core';
import { BodyData } from 'src/app/services/body-data.service';

type Details = { [index: string]: string[] };

@Component({
  selector: 'app-holdings',
  templateUrl: './holdings.component.html',
  styleUrls: ['./holdings.component.css'],
})
export class HoldingsComponent {
  info: Details;
  title: string;
  values: string[];

  constructor(private bodyData: BodyData) {
    this.info = this.bodyData.getDetails('Holdings') as Details;
    this.title = Object.keys(this.info)[0];
    this.values = Object.values(this.info)[0];
  }
}
