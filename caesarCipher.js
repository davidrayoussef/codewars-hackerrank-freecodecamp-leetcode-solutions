/*
Write a class with methods that, when given a string, will encode and return an uppercase string with each letter
shifted forward in the alphabet by however many shifts the cipher was initialized with. It should also contain
a method to decode an encoded string.

For example: 
let c = new CaesarCipher(5);
c.encode('Codewars'); // returns 'HTIJBFWX'
c.decode('BFKKQJX'); // returns 'WAFFLES'
*/

class CaesarCipher {
  constructor(shift) {
    this.shift = shift;
    this.chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encode(str) {
    return str
      .replace(/[a-z]/gi, (c) =>
        this.chars[(this.chars.indexOf(c.toUpperCase()) + this.shift) % 26]
      );
  }

  decode(str) {
    return str
      .replace(/[A-Z]/g, (c) =>
        this.chars[(this.chars.indexOf(c) + 26 - this.shift) % 26]
      );
  }
}

let c = new CaesarCipher(5);
c.encode('Codewars'); //=> "HTIJBFWX"
c.decode('BFKKQJX'); //=> "WAFFLES"
