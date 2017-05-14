/*
Design a stack that supports push, pop, top, and retrieving the minimum element.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
*/

class MinStack {
  constructor() {
    this.list = [];
    this.length = 0;
  }

  push(x) {
    this.list.push(x);
    this.length++;
  }

  pop() {
    let element = this.list.pop();
    this.length--;
    return element;
  }

  top() {
    return this.list[this.length - 1];
  }

  getMin() {
    return Math.min(...this.list);
  }
}

let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); //=> -3
minStack.pop();
minStack.top(); //=> 0
minStack.getMin(); //=> -2
