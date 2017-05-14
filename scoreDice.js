/*
Greed is a dice game played with five six-sided dice. Your mission is to score a throw according
to these rules. You will always be given an array with five six-sided dice values.

Three 1's => 1000 points
Three 6's =>  600 points
Three 5's =>  500 points
Three 4's =>  400 points
Three 3's =>  300 points
Three 2's =>  200 points
One   1   =>  100 points
One   5   =>   50 point

A single die can only be counted once in each roll. For example, a "5" can only count as part of a triplet
(contributing to the 500 points) or as a single 50 points, but not both in the same roll.
*/

function scoreDice(dice) {
  const points = { '111': 1000, '666': 600, '555': 500, '444': 400, '333': 300, '222': 200, '1': 100, '5': 50 };
  const triplets = dice
    .sort((a,b) => a - b)
    .map((_,i,a) => {
      if ( a[i] === a[i + 1] && a[i] === a[i + 2] ) {
        return a.splice(i, 3).join('');
      }
    })
    .join('')
  const result = points[triplets] || 0;

  return dice.reduce((acc, curr) => acc + (points[String(curr)] || 0), result);
}

scoreDice([ 2, 4, 4, 5, 4 ]); //=> 450
scoreDice([ 1, 1, 1, 3, 3 ]); //=> 1000
scoreDice([ 5, 5, 5, 3, 3 ]); //=> 500
