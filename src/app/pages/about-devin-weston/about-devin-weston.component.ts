import { Component } from '@angular/core';
import { BodyData } from 'src/app/services/body-data.service';

@Component({
  selector: 'app-about-devin-weston',
  templateUrl: './about-devin-weston.component.html',
  styleUrls: ['./about-devin-weston.component.css'],
})
export class AboutDevinWestonComponent {
  info: string;

  constructor(private bodyData: BodyData) {
    this.info = this.bodyData.getDetails('About Devin Weston') as string;
  }
}
