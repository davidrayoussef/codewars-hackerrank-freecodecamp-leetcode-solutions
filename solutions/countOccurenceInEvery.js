// You're given several line-separated strings. Find out the number of times a specific character occurs in EVERY string.
// In this example, only 'a' and 'b' occur in each of the strings.

function countOccurenceInEvery(input) {
  const arr = input.split('\n');
  const firstStr = arr[0];
  let count = 0;

  for (let i = 0; i < firstStr.length; i++) {
    const letter = firstStr[i];
    const foundInEvery = arr.every(str => str.includes(letter));

    if (foundInEvery) count++;
  }

  return count;
}

const input = `abcdde
baccd
eeabg`;

countOccurenceInEvery(input); //=> 2
