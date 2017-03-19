/*
Write a function that takes an array of directions and returns an array with the unnecessary directions removed.

For example, if you're given the following directions...
["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]
...you can immediately see that going "NORTH" and then "SOUTH" is not reasonable; better to stay at the same place!

Your task is to return a simplified version. A better path in this case is simply: ["WEST"]

Other examples:
For ["NORTH", "SOUTH", "EAST", "WEST"], the path "NORTH" + "SOUTH" is going north and coming back right away.
Better to do nothing. The path then becomes ["EAST", "WEST"]. Now "EAST" and "WEST" cancel each other. Therefore,
the final result is [].

For ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite, but they become
directly opposite after the removal of "EAST" and "WEST". Then the whole path is reducible to ["WEST", "WEST"].
*/

function reduceDirections(arr) {
  let stack = [];
  const pairs = {'NORTH': 'SOUTH', 'SOUTH': 'NORTH', 'EAST': 'WEST', 'WEST': 'EAST'};

  for (let i = 0; i < arr.length; i++) {
    let direction = arr[i];

    if (stack[stack.length - 1] === pairs[direction]) {
      stack.pop();
    }

    else stack.push(direction);
  }

  return stack;
}

reduceDirections(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]); //=> ["WEST"]
