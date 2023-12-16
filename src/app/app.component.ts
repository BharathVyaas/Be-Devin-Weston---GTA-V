import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  lines: number[];
  constructor() {
    this.lines = Array(150).fill(1);

    console.log(this.lines);
  }
}
