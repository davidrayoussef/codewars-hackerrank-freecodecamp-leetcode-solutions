/* Write a function that will take a string containing a resistor's band colors and return a string identifying the resistor's ohms and tolerance values.

The basic resistor color codes are: black: 0, brown: 1, red: 2, orange: 3, yellow: 4, green: 5, blue: 6, violet: 7, gray: 8, white: 9

Each resistor will have at least three bands, with the first and second bands indicating the first two digits of the ohms value, and the third
indicating the power of ten to multiply them by, for example a resistor with the three bands "yellow violet black" would be 47 * 10^0 ohms, or 47 ohms.

Most resistors will also have a fourth band that is either gold or silver, with gold indicating plus or minus 5% tolerance, and silver indicating
10% tolerance. Resistors that do not have a fourth band are rated at 20% tolerance.

For resistors less than 1000 ohms, return a string containing the number of ohms, a space, the word "ohms" followed by a comma and a space, the tolerance
value (5, 10, or 20), and a percent sign. For example, for the "yellow violet black" resistor mentioned above, you would return "47 ohms, 20%".

For resistors greater than or equal to 1000 ohms, but less than 1000000 ohms, you will use the same format as above, except that the ohms value will be
divided by 1000 and have a lower-case "k" after it. For example, for a resistor with bands of "yellow violet red gold", you would return "4.7k ohms, 5%"

For resistors of 1000000 ohms or greater, you will divide the ohms value by 1000000 and have an upper-case "M" after it. For example, for a resistor
with bands of "brown black green silver", you would return "1M ohms, 10%" */

function decodeResistorColors(bands) {
  bands = bands.split(' ');
  const colorCodes = { black: 0, brown: 1, red: 2, orange: 3, yellow: 4, green: 5, blue: 6, violet: 7, gray: 8, white: 9 };
  const digits = '' + colorCodes[bands[0]] + colorCodes[bands[1]];
  const ohm = +digits * (10 ** colorCodes[bands[2]]);
  const formatNumber = (n) => {
    if (n >= 1000000) return `${n / 1000000}M`;
    if (n >= 1000) return `${n / 1000}k`;
    return n;
  };
  const tolerance = bands[3] ? bands[3] === 'gold' ? 5 : 10 : 20;

  return `${formatNumber(ohm)} ohms, ${tolerance}%`;
}

decodeResistorColors("brown black black"); //=> "10 ohms, 20%"
decodeResistorColors("brown black brown gold"); //=> "100 ohms, 5%"
decodeResistorColors("brown black red silver"); //=> "1k ohms, 10%"
decodeResistorColors("yellow violet orange gold"); //=> "47k ohms, 5%"
decodeResistorColors("orange orange yellow gold"); //=> "330k ohms, 5%"
decodeResistorColors("red black green gold"); //=> "2M ohms, 5%"
