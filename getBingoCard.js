/*
A Bingo card contains 24 unique and random numbers according to this scheme:
- 5 numbers from the B column in the range 1 to 15
- 5 numbers from the I column in the range 16 to 30
- 4 numbers from the N column in the range 31 to 45
- 5 numbers from the G column in the range 46 to 60
- 5 numbers from the O column in the range 61 to 75

The card must be returned as an array of Bingo style numbers:
[ 'B14', 'B12', 'B5', 'B6', 'B3', 'I28', 'I27', ... ]

The numbers must be in the order of their column: B, I, N, G, O. Within the columns the order of the numbers is random.
*/

function getBingoCard() {
  const getRandomNumArr = (count, start, end) => {
    let arr = [];

    while (arr.length < count) {
      let rand = Math.round(Math.random() * (end - start) + start);
      if ( !arr.includes(rand) ) arr.push(rand);
    }

    return arr;
  };

  const bingoArr = [
    getRandomNumArr(5, 1, 15),
    getRandomNumArr(5, 16, 30),
    getRandomNumArr(4, 31, 45),
    getRandomNumArr(5, 46, 60),
    getRandomNumArr(5, 61, 75),
  ];

  return ['B', 'I', 'N', 'G', 'O']
    .map((letter,i) => bingoArr[i].map(num => letter + num))
    .reduce((acc,curr) => acc.concat(curr), []);
}
