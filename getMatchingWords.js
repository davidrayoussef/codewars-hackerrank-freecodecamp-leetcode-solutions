/*
Extend the Dictionary class with a method that returns a list of words matching a pattern.

This pattern may contain letters (lowercase) and placeholders ("?"). A placeholder stands for exactly one
arbitrary letter.
*/

class Dictionary {
  constructor(words) {
    this.words = words;
  }

  getMatchingWords(pattern) {
    const regex = new RegExp('^' + pattern.replace(/\?/g, '.') + '$');

    return this.words.filter(word => word.match(regex));
  }
}

let fruits = new Dictionary(['banana', 'apple', 'papaya', 'cherry']);
fruits.getMatchingWords('lemon'); //=> []
fruits.getMatchingWords('cherr??'); //=> []
fruits.getMatchingWords('?a?a?a'); //=> ['banana', 'papaya']
fruits.getMatchingWords('??????'); //=> ['banana', 'papaya', 'cherry']
