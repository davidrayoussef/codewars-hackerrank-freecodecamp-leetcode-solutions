/*
The Vigenere cipher is a method of encrypting alphabetic text by using a series of different Caesar ciphers based on
the letters of a keyword. It is a simple form of polyalphabetic substitution.

In a Caesar cipher, each letter of the alphabet is shifted along some number of places; for example, in a Caesar cipher
of shift 3, A would become D, B would become E, Y would become B and so on. The Vigenere cipher consists of several
Caesar ciphers in sequence with different shift values. Assume the key is repeated for the length of the text,
character by character. Note that some implementations repeat the key over characters only if they are part of the
alphabet, and that is not the case here.

The shift is derived by applying a Caesar shift to a character with the corresponding index of the key in the alphabet.

Visual representation:
message: my secret code i want to secure
key:     passwordpasswordpasswordpasswor

Write a class that, when given a key and an alphabet, can be used to encode and decode from the cipher.

For example:
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const key = 'password';

// creates a cipher helper with each letter substituted by the corresponding character in the key
let c = new VigenereCipher(key, alphabet);

c.encode('codewars'); // returns 'rovwsoiv'
c.decode('laxxhsj'); // returns 'waffles'
*/

class VigenereCipher {
  constructor(key, alphabet) {
    this.key = key;
    this.alphabet = alphabet;
  }

  encode(str) {
    return this.convert(str, 'encode');
  }

  decode(str) {
    return this.convert(str, 'decode');
  }

  convert(str, op) {
    return str
      .split('')
      .map((char,i) => {
        const letterIndex = this.alphabet.indexOf(char);
        const keyIndex = this.alphabet.indexOf(this.key[i % this.key.length]);
        let index;

        if (op === 'encode') index = (letterIndex + keyIndex) % this.alphabet.length;
        else index = (this.alphabet.length + (letterIndex - keyIndex)) % this.alphabet.length;

        return this.alphabet.includes(char) ? this.alphabet[index] : char;
      })
      .join('');
  }
}

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const key = 'password';

let c = new VigenereCipher(key, alphabet);
c.encode('codewars'); //=> "rovwsoiv"
c.decode('rovwsoiv'); //=> "codewars"
c.decode('laxxhsj'); //=> "waffles"
c.encode('it\'s a shift cipher!'); //=> "xt'k o vwixl qzswej!"
