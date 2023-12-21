interface BodyDataStructure {
  getTitles(): string[];
}

export type ContainerValue =
  | string
  | string[]
  | Record<string, any>
  | undefined;

export class BodyData implements BodyDataStructure {
  container: Record<string, ContainerValue>;

  constructor() {
    this.container = {
      'About Devin Weston': `As much as anything, I'm a teacher. I made my first million when I was 23 and a year out of college. I spent it in a week. A million is nothing. I drop that on a diving watch. My ex-wife cost me $135 million and that was cheap at the price. A million will buy you a 3-bedroom house, a midsize sedan and maybe a week in Turks and Caicos, if you're lucky. Add a zero, then we can talk. I go in hard, I get out fast, I spin you around and I do it again, leaving you confused and spent, Investments, women, apocalyptic yoga, meditation - it doesn't matter that's how I do it 24/7 on every level. That's enlightenment. I'm a free thinker, but I'm also very spiritual, town two ashrams, a beach house and I really care about the environment. You've got to stay ahead of the game to make your own rules. As soon as YOU know about it, I'm already gone. A shadow. A ninja. A ghost. I'm the most famous person you've never heard of. I'm a killer but I also care. I got in early on the Acai Berry and walked away with 9 figures. I rode the bull till it split in 1997 and fleeced the bear till it bled in 2001. When I took a volcano-kite surfing trip to Nicaragua in 2007 without closing out my positions, I was so highly-leveraged that I crashed the market. They'll tell you it was the sub-prime mortgage crisis, but it was me. I've made so much money it bores me. Anyone can do it. All it takes is the right attitude, lifestyle choices and a big pair of balls, along with a massive heart and a great and positive outlook on life. I used to buy $250,000 sports cars and crash them at high speed as a joke. Now, I help indigenous farmers, surt for a couple of hours and then make a few million shorting hydro carbons.`,
      'Meet The Team': [
        {
          img: '../../assets/Images/Body-Images/Devin Weston.png',
          name: `Devin Weston`,
          description: `Chairman, President, CEO, Spiritual Renegade.`,
          'Devin Weston': `Devin graduated magna cum laude in Theater & Musical Therapy from San Andreas Community College without attending a single lecture. He was destined to be a leader. A year later he was al millionaire.

        A self-taught financial genius with an amazing tolerance for risk, high-intensity cardio and Kombucha, he revolutionized the hedge fund industry in the early 2000s by refusing to hedge at all. Since 2004 he has literally bought and deliberately bankrupted more companies than he's had hot dinners, though he has been on a raw food diet since 2000. One of the world's greatest living investors, the odds on him becoming president one day are 3:1. But he'd never take a bet that safe.`,
          next: `Meet Ray 'Slim' Navaro`,
        },
        {
          img: '../../assets/Images/Body-Images/George Rucker.png',
          name: `Ray 'Slim' Navaro`,
          description: `Chief Investment Officer`,
          "Ray 'Slim' Navaro": `One of Devin Weston's first mentees, Slim starts the day off with a game of handball and a protein smoothie. Most of his deals are done in locker rooms. He grew up on the wrong side of the tracks - and has come to hate public transportation ever since. He credits Weston with saving him from a life behind bars, most recently in 2008 when he was accused of promoting junk mortgage-backed securities to elderly investors then shorting those same securities for massive profits before they defaulted. He was never found guilty. He is a true family man. He has a loving third wife and children. If it wasn't for his well deserved bonus, the Weston Alpha Fund would have been the top performing investment in the world last year.`,
          next: `Meet Molly Schultz`,
        },
        {
          img: '../../assets/Images/Body-Images/Molly Schultz.png',
          name: `Molly Schultz`,
          description: `Senior Vice President and General Counsel`,
          'Molly Schultz': `Molly has a law degree from Vespucci University and an Msc in Corporate Raiding from ULSA. As a senior in high school she successfully sued three members of the teaching staff when she wasn't named homecoming queen. After training at Feist & Weich, she spent 5 years working for the in-house Litigation team at Globe Dil before moving to Redwood Cigarettes, where she successfully overturned 26 class action lawsuits linking tobacco use to lung cancer. She was headhunted by Devin at a Resistance Training For Rwanda' benefit workout in 2009. She does not have any hobbies`,
          next: `Meet George Rucker`,
        },
        {
          img: "../../assets/Images/Body-Images/Ray 'Slim' Navaro.png",
          name: `George Rucker`,
          description: `Head Of Research`,
          'George Rucker': `After serving in the military in charge of strategic drone strikes, George claims to have worked on super secret government projects. He knows how to identify a weak spot, swoop in and surgically annihilate everyone while making a tidy profit, regardless of collateral damage. When it comes to sniffing out floundering companies with weak management and loose union ties and a workforce that can be kicked to the curb, George is the best in the business.`,
          next: ``,
        },
      ],
      '10 Commandments of Weston': {
        "You've got to have game to win it": `Ooze success from every exfoliated pore. Don't use baseball metaphors, that's lame. Use kite-boarding metaphors. Forget payday, make it a slayday. Blow up. Punch out. Slap the tailfish. Ok, you get the idea - be original. The day you don't find yourself the most interesting man in the room is the day you're finished.`,
        'Work-Spirituality Balance': `Do you think I've ever worked 9 to 57 Not in this time zone! A true entrepreneur works two hours a day max. Any more than that, you're over-thinking it and not dedicating enough time to self-improvement. An old leper in Nepal once hissed at me. "A man cannot rule over his domain until he's first learned how to worship himself." I never feel stress or self-doubt because I know I'm delivering on my potential holistically.`,
        'Have a full head of hair': `Statistically, your odds of reaching a position of true power without one are close to zero, and even I can't hedge against that. A bald head is like a cleft palate - there's no excuse any more. The technology is there to fix it. Believe me, I've done enough outreach work in the brothels of Bangalore to know.`,
        "Don't go to college": `4 years of debt? Only an amateur holds debt for that long. I short debt, trade it hard in the morning, then go sea kayaking in the afternoon. You'll learn everything you need to know at the University of Kicking Ass, I taught myself fluent Chinese, Thai and Spanish just from running ultra-marathons in the third world.`,
        'The high before the pie': `It's all about the rush. I've lost ten times more money than I've made. And I'm a billionaire. So you do the math. No, screw the math. Do you think I have the first idea what derivatives are? Hell no, and I trade them every day. Schlongberg Sachs don't even know what derivatives are, Math won't make you rich. Balls make you rich. Balls and soul. Soul balls, if you will`,
        'Always take risks': `You don't get seriously rich without serious risk. It doesn't matter if you're hundred million deep in Somali freight derivatives, 600 feet deep in the Amazon breath-hold spear fishing, or balls-deep in a Guatemalan street whore without a condom. You're deep, you're exposed, and that's when true enlightenment happens`,
        Diversify: `Investments, meditation, philanthropy - you have to mix it up to stay at the edge. Real estate, sports teams, movie production, shopping malls, cloning... the list goes on and on. I have a finger in it all. The President even lets me finger his wife. That's the level of trust you have to inspire in people.`,
        'Never play it safe': `Extreme sports, extreme investing. Flash-trade some Afghani junk bonds then go cave base jumping. When you are point zero seconds from annihilation you know the meaning of adrenaline. The blue chips are like fat chicks. They're easy, return no growth, and you can never get rid of them.`,
        'Give back': `And I don't just mean severance packages to keep the unions happy during a hostile takeover. A big charitable donation at the end of the fiscal year, a quick stop-off in Haiti on the way to your eco-villa in St. Lucia... the illusion of making a difference will help you feel so much better about yourself. Karma's important when you have more in the bank than entire continents.`,
        'Live liberal, vote conservative': undefined,
      },
      Holdings: {
        'Current investments/subsidiaries may or may not include': [
          `Richards Majestic Productions`,
          `The Country of Greece`,
          `Los Santos Corkers`,
          `Merryweather Security`,
          `Die Already movie franchise`,
          `Banner Hotels`,
          `Dynasty & Real Estate`,
          `Vanilla Unicom Gentleman's Club`,
          `Gastro Band`,
          `Universal Uniform`,
          `Toe Shoes`,
          `Al Dente's`,
          `Bourgeoix Cognac`,
          `Nogo Vodka`,
          `Patriot Beer`,
          `Debonaire Cigarettes`,
          `Orang-o-tang`,
          `Mollis`,
          `Good Aids`,
          `San Andreas Lotto`,
          `Pharte Gas`,
          `Lando-Corp`,
          `Los Santos Deparment of Nuclear Power`,
          `Pump & Run Gymnasium`,
          `Lobon Sportswear`,
          `Save-A-Cent`,
          `Skiver Construction Corp`,
          `Squeeze One Out Juice Bar`,
        ],
      },
      'Weston Alpha Fund': [
        `Domiciled in the beautiful British Virgin islands, the Weston Alpha Fund employs a multi-strategy investment approach to reduce market risk and stop Devin getting bored.`,
        `The Weston Alpha Fund's ground-breaking portfolio consists of a broad range of complex, illiquid and explosively volatile instruments including, but not limited to`,
        [
          `Healthcare Default Swaps`,
          `Asbestos Repos`,
          `Global Warming Myth Futures`,
          `Fracking Forwards`,
          `Biowaste Binary Options`,
          `Republic of Congo currency contracts`,
          `Chinese Landfill Floating Rate Notes`,
          `Uranium Ore Cross-Currency FRA`,
          `Video Poker machines`,
        ],

        "Devin's promise:",
        [`Average annual returns of 73% gross, 18% net`, `Asbestos Repos`],
        "Devin's fee:",
        [
          `73% of returns plus a flat free of 10% **`,
          `** Don't worry, you're still obscenely rich.`,
        ],
      ],
    };
  }

  getTitles(): string[] {
    return Object.keys(this.container);
  }

  getDefaultTitle() {
    return Object.keys(this.container)[0];
  }

  getDetails(key: string): ContainerValue {
    return this.container[key];
  }
}
