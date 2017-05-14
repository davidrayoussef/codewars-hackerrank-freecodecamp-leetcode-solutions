/*
Your task is to reduce a list of numbers to one number according to a list of rules.
You have to use these rules consecutively, so when you get to the end of the list of rules, you start again at the beginning.

For example...
numbers: [ 2.0, 2.0, 3.0, 4.0 ]
rules: [ (a,b) => a + b, (a,b) => a - b ]
result: 5.0

Here you get a list of four numbers and a list of two rules.
First rule says: Sum the two numbers a and b. Second rule says: Subtract b from a.

The steps in progression:
1. Rule 1: first number + second number -> 2.0 + 2.0 = 4.0
2. Rule 2: previous result - third number -> 4.0 - 3.0 = 1.0
3. Rule 1: previous result + fourth number -> 1.0 + 4.0 = 5.0
*/

function reduceByRules(numbers, rules) {
  return numbers.reduce((a,b,i) => {
    return rules[(i - 1) % rules.length](a, b);
  });
}

const rules = [ (a, b) => a + b, (a, b) => a - b ];
reduceByRules([2.0, 2.0, 3.0, 4.0], rules); //=> 5
