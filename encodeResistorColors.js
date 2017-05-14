/*
Write a function that function that takes a string of the resistor's ohms and returns a string containing its band colors.

Your function will receive a string containing the ohms value you need, followed by a space and the word "ohms"
The way an ohms value is formatted depends on the magnitude of the value:

- For resistors less than 1000 ohms, the ohms value is just formatted as the plain number. For example, with the 47-ohm
  resistor above, your function would receive the string "47 ohms", and return the string `"yellow violet black gold".
- For resistors greater than or equal to 1000 ohms, but less than 1000000 ohms, the ohms value is divided by 1000, and
  has a lower-case "k" after it. For example, if your function received the string "4.7k ohms", it would need to return
  the string "yellow violet red gold".
- For resistors of 1000000 ohms or greater, the ohms value is divided by 1000000, and has an upper-case "M" after it.
  For example, if your function received the string "1M ohms", it would need to return the string "brown black green gold".
*/

function encodeResistorColors(ohmsString) {
  const ohms = ohmsString.split(' ')[0];
  const colorCodes = { '0': 'black', '1': 'brown', '2': 'red', '3': 'orange', '4': 'yellow', '5': 'green', '6': 'blue', '7': 'violet', '8': 'gray', '9': 'white' };
  const formatNumber = (strNum) => {
    if (strNum.match(/k/)) return String(+ohms.slice(0, -1) * 1000);
    if (strNum.match(/M/)) return String(+ohms.slice(0, -1) * 1000000);
    return strNum;
  };
  const digits = formatNumber(ohms);
  const first = digits[0];
  const second = digits[1];
  const third = digits.length - 2;

  return `${colorCodes[first]} ${colorCodes[second]} ${colorCodes[third]} gold`;
}

encodeResistorColors("10 ohms"); //=> "brown black black gold"
encodeResistorColors("470 ohms"); //=> "yellow violet brown gold"
encodeResistorColors("1k ohms"); //=> "brown black red gold"
encodeResistorColors("22k ohms"); //=> "red red orange gold"
encodeResistorColors("330k ohms"); //=> "orange orange yellow gold"
encodeResistorColors("2M ohms"); //=> "red black green gold"
