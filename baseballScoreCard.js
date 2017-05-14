/*
Create a constructor "ScoreCard" that has two public functions: addEntry and getScore.

addEntry - Takes in the result of an at-bat. This result can be single, double, triple, homerun, or out.

getScore - Returns the score in the format Home: {HOME_SCORE} Away: {AWAY_SCORE}

To keep things simple, base runners will advance the amount of bases equal to that of the batter's hit (i.e.
if the batter hits a double, each base-runner will advance two bases).

A few important baseball rules:
- The Away team bats first.
- There are three outs in an inning.
- After three outs, the opposing team hits.
- The hits single, double, triple and homerun correspond to the batter reaching bases first, second, third and
  home respectively.
- Base runners start at home and then cycle through the bases first, second, third and home.
- Runners score for their team after they reach home.
*/

class ScoreCard {
  constructor() {
    this.scores = { 'home': 0, 'away': 0 };
    this.inningOuts = 0;
    this.inning = [];
    this.awayOrHome = ['away', 'home'];
    this.atBat = 'away';
  }

  addEntry(entry) {
    if (entry === 'out') {
      this.inningOuts++;

      if (this.inningOuts === 3) {
        this.atBat = this.awayOrHome[(this.awayOrHome.indexOf(this.atBat) + 1) % 2];
        this.inning = [];
        this.inningOuts = 0;
      }
    }

    else {
      const play = { 'single': 1, 'double': 2, 'triple': 3, 'homerun': 4 }[entry];

      if (this.inning.length) this.inning = this.inning.map(v => v + play);

      this.inning.push(play);
      this.scores[this.atBat] += this.inning.filter(v => v > 3).length;
      this.inning = this.inning.filter(v => v <= 3);
    }
  }

  getScore() {
    return `Home: ${this.scores['home']} Away: ${this.scores['away']}`;
  }
}

let scoreCard = new ScoreCard();
scoreCard.addEntry('out');
scoreCard.addEntry('out');
scoreCard.addEntry('homerun');
scoreCard.addEntry('out');
scoreCard.getScore(); //=> "Home: 0 Away: 1"
scoreCard.addEntry('double');
scoreCard.addEntry('homerun');
scoreCard.addEntry('triple');
scoreCard.addEntry('single');
scoreCard.getScore(); //=> "Home: 3 Away: 1"
