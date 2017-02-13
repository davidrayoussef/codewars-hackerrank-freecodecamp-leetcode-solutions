// Given a list of words, return the words that can be typed using letters of the alphabet on only ONE row of
// an American keyboard.

function findSingleRowKeyboardWords(words) {
  const [row1, row2, row3] = [
    ['q','w','e','r','t','y','u','i','o','p'],
    ['a','s','d','f','g','h','j','k','l'],
    ['z','x','c','v','b','n','m']
  ];

  return words
    .filter(word => {
      word = word.toLowerCase().split('');

      return word
        .every(letter => row1.includes(letter)) || word
        .every(letter => row2.includes(letter)) || word
        .every(letter => row3.includes(letter))
    });
}

findSingleRowKeyboardWords(["Hello", "Alaska", "Dad", "Peace"]); //=> ["Alaska", "Dad"]
