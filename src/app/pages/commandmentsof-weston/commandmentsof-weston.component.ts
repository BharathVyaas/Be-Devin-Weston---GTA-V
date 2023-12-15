import { Component } from '@angular/core';
import { BodyData } from 'src/app/services/body-data.service';

type Details = { [index: string]: string };

@Component({
  selector: 'app-commandmentsof-weston',
  templateUrl: './commandmentsof-weston.component.html',
  styleUrls: ['./commandmentsof-weston.component.css'],
})
export class CommandmentsofWestonComponent {
  info: Details;
  index: number;
  titles: string[];
  values: (string | undefined)[];
  currentItter: [number, number];

  constructor(private bodyData: BodyData) {
    this.info = this.bodyData.getDetails(
      '10 Commandments of Weston'
    ) as Details;

    this.titles = Object.keys(this.info);
    this.values = Object.values(this.info);

    this.index = 0;
    this.currentItter = [this.index, ++this.index];
    console.log(this.titles, this.values);
  }

  nextHandler() {
    if (this.index < this.titles.length - 2)
      this.currentItter = [++this.index, ++this.index];
  }
}
