import { Component, OnInit } from '@angular/core';
import { BodyData } from 'src/app/services/body-data.service';

type Details = [string, string, string[], string, string[], string, string[]];

@Component({
  selector: 'app-weston-alpha-fund',
  templateUrl: './weston-alpha-fund.component.html',
  styleUrls: ['./weston-alpha-fund.component.css'],
})
export class WestonAlphaFundComponent {
  info: Details;

  constructor(private bodyData: BodyData) {
    this.info = this.bodyData.getDetails('Weston Alpha Fund') as Details;
  }
}
