/*
Design and implement a data structure for a Least Recently Used (LRU) cache. It should support the following operations:
get and put.
- get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
- put(key, value) - Set or insert the value if the key is not already present. When the cache reaches its capacity,
  it should invalidate the least recently used item before inserting a new item.
*/

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.store = {};
    this.keysQueue = [];
  }

  get(key) {
    const val = this.store[key] !== undefined ? this.store[key] : -1;

    if (val !== -1) {
      this.keysQueue.splice(this.keysQueue.indexOf(key), 1);
      this.keysQueue.push(key);
    }

    return val;
  }

  put(key, val) {
    this.store[key] = val;

    if ( this.keysQueue.includes(key) ) {
      this.keysQueue.splice(this.keysQueue.indexOf(key), 1);
    }

    this.keysQueue.push(key);

    if ( this.keysQueue.length > this.capacity ) {
      delete this.store[ this.keysQueue.shift() ];
    }
  }
}

let cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
cache.get(1); //=> 1
cache.put(3, 3);
cache.get(2); //=> -1
cache.put(4, 4);
cache.get(1); //=> -1
cache.get(3); //=> 3
cache.get(4); //=> 4
