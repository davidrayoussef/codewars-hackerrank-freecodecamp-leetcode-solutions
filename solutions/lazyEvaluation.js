/*
Lazy evaluation is an evaluation strategy which delays the evaluation of an expression until its value is needed.

Implement the Lazy function. This function has two methods:
add(fn[, arg1, arg2, ...]): adds the fn function to the lazy chain evaluation. This function could receive optional arguments.
invoke(target): performs the evaluation chain over the target array.

For example, given these functions:
*/
function max() {
    return Math.max.apply(null, arguments);
}

function filterNumbers() {
  return Array.prototype.filter.call(arguments, function(value) {
    return isNumeric(value);
  });
}

function isNumeric(n) {
  return !isNaN(n) && Number(n) === n;
}

function filterRange(min, max) {
  var args = Array.prototype.slice.call(arguments, 2);
  return Array.prototype.filter.call(args, function(value) {
    return min <= value && value <= max;
  });
}

/*
You could use it via composition:
max.apply(null, filterRange.apply(null, [1, 3].concat(filterNumbers(1, 2, "3", 7, 6, 5))));

But this solution is not reusable. A better approach could be to use composition with lazy invocation:

new Lazy()
  .add(filterNumbers)
  .add(filterRange, 2, 7)
  .add(max)
  .invoke([1, 8, 6, [], "7", -1, {v: 5}, 4]); // 6
*/

class Lazy {
  constructor() {
    this.fns = [];
  }

  add(fn) {
    fn = fn.bind.apply(fn, arguments);
    this.fns.push(fn);

    return this;
  }

  invoke(args) {
    return this.fns.reduce((result, fn) => {
      return fn(...result);
    }, args);
  }
}

new Lazy()
  .add(filterNumbers)
  .add(filterRange, 2, 7)
  .add(max)
  .invoke([1, 8, 6, [], "7", -1, {v: 5}, 4]); //=> 6
