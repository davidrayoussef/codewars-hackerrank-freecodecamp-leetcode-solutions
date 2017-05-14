/*
Your task is to implement an Event constructor function for creating event objects which will do the following:
- the event object should have subscribe() and unsubscribe() methods to add and remove handlers
- subscribe() and unsubscribe() should be able take an arbitrary number of arguments
- subscribe() should disregard invalid arguments (arguments that are not functions)
- unsubscribe() should skip functions which are not subscribed
- multiple subscription of the same handler is allowed, and in this case unsubscription removes the last
  subscription of the same handler
- the event object should have an .emit() method which must invoke all the handlers with the arguments provided
- emit() should use its own invocation context as handlers' invocation context
- the order of the handlers' invocations must match the order of subscription
- subscribe, unsubscribe and emit are the only public properties that are allowed on the event object
*/

class Event {
  constructor() {
    let handlers = [];

    this.subscribe = function(...fns) {
      fns.map(fn => {
        if (typeof fn === 'function') handlers.push(fn);
      });
    }

    this.unsubscribe = function(...fns) {
      fns.map(fn => {
        if (handlers.includes(fn) && typeof fn === 'function') {
          handlers.splice(handlers.lastIndexOf(fn), 1);
        }
      });
    }

    this.emit = function(...args) {
      let fns = handlers.slice();

      fns.map(function(fn) {
        fn.call(this, ...args);
      }.bind(this));
    }
  }
}

function l(arr) { arr.push('l'); }
function o(arr) { arr.push('o'); }

let e = new Event();
let bucket = [];

e.subscribe(l, o, l);
e.emit(bucket);

console.log(bucket); //=> ["l", "o", "l"]

e.unsubscribe(o, l);
bucket = [];
e.emit(bucket);

console.log(bucket); //=> ["l"]
