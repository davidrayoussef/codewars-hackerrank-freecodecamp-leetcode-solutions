// You're given several line-separated strings. Find out the number of times a specific character occurs in EVERY string.
// In this example, only 'a' and 'b' occur in each of the strings.
const input = `abcdde
baccd
eeabg`;

function countOccurenceInEvery(input) {
  const arr = input.split('\n');
  let letters = [];

  for (let i = 0, j = 0; i < arr.length; i++) {
    while (arr[i][j] !== undefined) {
      let letter = arr[i][j];
      let foundInEvery = arr.every(str => str.includes(letter));
      if (foundInEvery) letters.push(letter);
      j++;
    }
  }

  return [...new Set(letters)].length;
}

countOccurenceInEvery(input); //=> 2
