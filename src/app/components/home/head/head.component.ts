import { Component, OnDestroy, OnInit } from '@angular/core';

import { HeadData } from 'src/app/services/head-data.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'],
})
/**
 * Renders Head.
 * @class
 */
export class HeadComponent implements OnInit, OnDestroy {
  image: string;
  paragraph: [string, string];

  // Stores Head Container Data
  headData: HeadData;

  // -- Head Data Service methods Require this
  imageIndex: number;
  paragraphIndex: number;

  imageLength: number;
  paragraphLength: number;
  // --

  // Stores SetInterval Ids
  private imageChangeInterval: any;
  private paragraphChangeInterval: any;

  constructor() {
    this.headData = new HeadData();
    this.image = '';
    this.imageIndex = 0;
    this.paragraphIndex = 0;
    this.paragraph = ['', ''];
    this.imageChangeInterval = undefined;
    this.paragraphChangeInterval = undefined;
    this.imageLength = this.headData.getImageLength();
    this.paragraphLength = this.headData.getParagraphLength();
  }

  ngOnInit(): void {
    this.image = this.headData.getImage(this.imageIndex);
    this.paragraph = this.headData.getParagraph(this.imageIndex);

    this.getHeadData();
  }

  // Change Image every 3s and Paragraph every 4s
  getHeadData() {
    this.imageChangeInterval = setInterval(() => {
      this.imageIndex = (this.imageIndex + 1) % this.imageLength;
      this.image = this.headData.getImage(this.imageIndex);
    }, 3000);
    this.paragraphChangeInterval = setInterval(() => {
      this.paragraphIndex = (this.paragraphIndex + 1) % this.paragraphLength;
      this.paragraph = this.headData.getParagraph(this.paragraphIndex);
    }, 4000);
  }

  ngOnDestroy(): void {
    clearInterval(this.imageChangeInterval);
    clearInterval(this.paragraphChangeInterval);
  }
}
