/*
Implement the following operations of a queue using stacks.

push(x) -- Push element x to the back of queue.
pop() -- Removes the element from in front of queue.
peek() -- Get the front element.
empty() -- Return whether the queue is empty.
*/

class MyQueue {
  constructor() {
    this.list = [];
    this.length = 0;
  }

  push(x) {
    this.list.push(x);
    this.length++;
  }

  pop() {
    let element = this.list.shift();
    this.length--;
    return element;
  }

  peek() {
    return this.list[0];
  }

  empty() {
    return this.list.length === 0;
  }
}

let queue = new MyQueue();
queue.push(1);
queue.push(2);
queue.pop(); //=> 1
queue.peek(); //=> 2
