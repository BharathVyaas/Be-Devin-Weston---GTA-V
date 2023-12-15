import { Component } from '@angular/core';
import { BodyData } from 'src/app/services/body-data.service';

type Details = {
  [index: string]: string;
  description: string;
  name: string;
  next: string;
};

@Component({
  selector: 'app-meet-the-team',
  templateUrl: './meet-the-team.component.html',
  styleUrls: ['./meet-the-team.component.css'],
})
export class MeetTheTeamComponent {
  info: Details[];
  index: number;

  constructor(private bodyData: BodyData) {
    this.info = this.bodyData.getDetails('Meet The Team') as Details[];
    this.index = 0;
  }

  selectNext() {
    ++this.index % this.info.length;
  }
}
