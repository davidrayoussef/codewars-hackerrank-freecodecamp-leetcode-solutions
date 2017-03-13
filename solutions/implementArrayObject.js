/*
Your task will be to implement an object (class) that mimics the array object, but should not actually be an Array.
You are otherwise free to choose your own implementation.

The object shall be named List and shall have the methods push, pop, shift, unshift and filter defined on its prototype.
Each of these methods should behave exactly as their Array counterpart does. (It is acceptable for filter to return a
List or an Array.)

The List constructor must take an arbitrary number of arguments as initial values for your list.
Furthermore, your list should have a length property that dynamically changes as your list changes.
*/

class List {
  constructor(...nums) {
    this.length = nums.length;

    nums.map((num,i) => this[i] = num);

    Object.defineProperty(this, 'length', {
      enumerable: false,
      configurable: false
    });

    return this;
  }

  push(...items) {
    items.map(item => {
      this[this.length] = item;
      this.length++;
    });

    return this.length;
  }

  pop() {
    const item = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;

    return item;
  }

  shift() {
    let item = this[0];
    delete this[0];
    Object.keys(this).map((key,i) => this[i] = this[key]);
    delete this[this.length - 1];
    this.length--;

    return item;
  }

  unshift(...items) {
    const itemLength = items.length;

    for (let i = this.length + itemLength - 1; i >= itemLength; i--) {
      this[i] = this[i - itemLength];
    }

    items.map((item,i) => {
      this[i] = item;
      this.length++;
    });

    return this.length;
  }

  filter(fn) {
    return Object.keys(this).map(key => this[key]).filter(fn);
  }
}

let list = new List(3,4,5,6);
list.push(7,8,9,10);
list.unshift(0,1,2);
list.pop(); //=> 10
list.shift(); //=> 0
list.length; //=> 9
list.filter(v => v > 5); //=> [6, 7, 8, 9]
