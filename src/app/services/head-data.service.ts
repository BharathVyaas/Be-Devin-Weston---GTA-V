/**
 *
 * Stores Images and Paragraphs related to Head.
 *
 */
export class HeadData {
  // Images
  private images: [string, string, string, string];

  // Paragraphs
  private paragraphs: [[string, string], [string, string], [string, string]];

  constructor() {
    this.images = [
      '../../../../assets/Images/Head-Images/Img 1.jpg',
      '../../../../assets/Images/Head-Images/test.jpg',
      '../../../../assets/Images/Head-Images/Img 3.jpg',
      '../../../../assets/Images/Head-Images/test.jpg',
    ];

    this.paragraphs = [
      [
        `"6 black belts, 9 inches, 12 billion. I do things in threes so bring some friends, ladies. I'm joking, of course, but the point, is, be yourself. I'm already taken."`,
        `-Devin Weston, Opening Bell Speech, BAWSAO 2009`,
      ],
      [
        `"I change positions more than a Tijuana whore during spring break. The men in the room are laughing but let me tell you - human trafficking is no joke."`,
        `-Devin Weston, Motivational speech, Edzell Foundation Youth Center, 2011`,
      ],
      [
        `"I'm not a Venture Capitalist. I'm an Adventure Capitalist. You've got to look at companies like women. Get them when they're vulnerable, strip them down, desecrate them to the point of collapse, then flip them around for the money shot. Only don't quote me on that, because I already did."`,
        `-Devin Weston, Address to the Faculty of Economics, University of Los Santos, 2011`,
      ],
    ];
  }

  getImageLength() {
    return this.images.length;
  }

  getParagraphLength() {
    return this.paragraphs.length;
  }

  getImage(index: number) {
    return this.images[index];
  }

  getParagraph(index: number) {
    return this.paragraphs[index];
  }
}
