/*
Design and implement a data structure for a Least Recently Used (LRU) cache. It should support the following operations:
get and put.
- get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
- put(key, value) - Set or insert the value if the key is not already present. When the cache reaches its capacity,
  it should evict the least recently used item.
*/

class LRUCache {
  constructor(capacity) {
    // We'll set the capacity of the cache to the number that was passed in...
    this.capacity = capacity;
    // ...and define an empty object/dictionary to store key-value pairs...
    this.store = {};
    // ...and an array to use as a queue (first in, first out) to order the keys by the least to most recently accessed or added.
    // We'll use push() to place in the back/beginning of the queue, and shift() to dequeue/remove from the front/end.
    this.keysQueue = [];
  }

  get(key) {
    // Here we set a variable val to the value of the key if it's found in the store, or to -1 if it's not.
    const val = this.store[key] !== undefined ? this.store[key] : -1;

    if (val !== -1) {
      // If the value does not equal -1, then it exists in the store, so we need to move it to the beginning
      // of the queue, because it's been 'used.' One way to do that is to splice the key out of the array...
      this.keysQueue.splice(this.keysQueue.indexOf(key), 1);
      // ...and then push it to the back/beginning.
      this.keysQueue.push(key);
    }

    // We return the value of the key, or -1 if it wasn't found.
    return val;
  }

  put(key, val) {
    // Here we place the key-value pair in the store. If it already exists, it'll be overwritten with the new value.
    this.store[key] = val;

    // Let's check if the queue already includes the key.
    if ( this.keysQueue.includes(key) ) {
      // If it does, we'll splice it out...
      this.keysQueue.splice(this.keysQueue.indexOf(key), 1);
    }

    // ...and push the key to the back/beginning of the queue.
    this.keysQueue.push(key);

    // Now let's check if our capacity has been exceeded.
    if ( this.keysQueue.length > this.capacity ) {
      // If it has, then let's pull the least recently used key from the front/end of the queue, and at the same time,
      // we'll use that key to delete the key-value pair from the store object.
      delete this.store[ this.keysQueue.shift() ];
    }
  }
}

let cache = new LRUCache(2); // creates a new cache instance and sets the capacity to 2
cache.put(1, 1); //=> places key 1 with value 1 in the store object and key 1 in the queue array
cache.put(2, 2); //=> places key 2 with value 2 in the store and key 2 in the back/beginning of the queue
cache.get(1); //=> moves key 1 to the back/beginning of the queue and returns 1
cache.put(3, 3); //=> places key 3 with value 3 in the store and key 3 in the beginning of the queue, and
// removes 2 (the LRU) because it's over capacity
cache.get(2); //=> returns -1 because key 2 has been removed
cache.put(4, 4); //=> places key 4 with value 4 in the store and key 4 in the beginning of the queue, and
// removes 1 (the LRU) because it's over capacity
cache.get(1); //=> returns -1 because key 1 has been removed
cache.get(3); //=> moves key 3 to the beginning of the queue and returns 3
cache.get(4); //=> moves key 4 to the beginning of the queue and returns 4
