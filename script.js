// Note before starting:

// JavaScript’s dynamic nature of arrays allows us to insert and retrieve indexes that are outside our array size range.

// Example: if we create an array of size 16 to represent our buckets, nothing stops us from storing items at index 500. This defeats the purpose of limiting storage size in hash maps, so we need to enforce some restrictions.

// Use the following snippet whenever you access a bucket through an index. We want to throw an error if we try to access an out-of-bounds index:

// if (index < 0 || index >= buckets.length) {
//   throw new Error("Trying to access index out of bounds");
// }

import { LinkedList } from "./linked-list.js";

class HashMap {
  constructor(capacity = 16, loadFactor = 0.75) {
    this.capacity = capacity;
    this.loadFactor = loadFactor;
  }

  // Methods
  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + (key.charCodeAt(i) % 16);
      // apply modulo here to prevent integers from exceeding the max allowed value by JScript
    }
    console.log(hashCode);
    return hashCode;
  }

  set(key, value) {
    let hashCode = this.hash(key);
    let bucket = hashCode % 16;

    console.log(`${value} ${key} goes to bucket: ${bucket}`);
    if (this[bucket] == undefined) {
      this[bucket] = new LinkedList();
      this[bucket].append(key, value);
      console.log(this[bucket]);
    } else {
      console.log(this[bucket]);
      this[bucket].append(key, value);
    }

    // use modulo of 16, which should return a # between 1 and 16
    // assign key to the corresponding bucket
    // if key exists in bucket and is === to new key, overwrite existing key
  }

  get(key, value) {}

  has(key) {}

  remove(key) {}

  length() {}

  clear() {}

  keys() {}

  values() {}

  entries() {}
}

export { HashMap };
