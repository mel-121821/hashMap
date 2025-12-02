// Note before starting:

// JavaScript’s dynamic nature of arrays allows us to insert and retrieve indexes that are outside our array size range.

// Example: if we create an array of size 16 to represent our buckets, nothing stops us from storing items at index 500. This defeats the purpose of limiting storage size in hash maps, so we need to enforce some restrictions.

// Use the following snippet whenever you access a bucket through an index. We want to throw an error if we try to access an out-of-bounds index:

// if (index < 0 || index >= buckets.length) {
//   throw new Error("Trying to access index out of bounds");
// }

import { LinkedList } from "./linked-list.js";

class HashMap {
  constructor(loadFactor = 0.75) {
    this.capacity = 16;
    this.loadFactor = loadFactor;

    // create an array with a length of capacity
    this.buckets = new Array(this.capacity);
    console.log(this.buckets);
    console.log(this.buckets.length);
  }

  // Methods
  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + (key.charCodeAt(i) % this.capacity);
      // apply modulo here to prevent integers from exceeding the max allowed value by JScript
    }
    return hashCode % this.capacity;
  }

  set(key, value) {
    let index = this.hash(key);

    console.log(`${value} ${key} goes to bucket: ${index}`);

    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    } else {
      if (
        this.buckets[index] != undefined &&
        this.buckets[index].containsKey(key)
      ) {
        this.buckets[index].changeAtKey(key, value);
      } else if (this.buckets[index] != undefined) {
        this.buckets[index].append(key, value);
      } else {
        this.buckets[index] = new LinkedList();
        this.buckets[index].append(key, value);
      }
    }

    // use modulo of 16, which should return a # between 1 and 16
    // assign key to the corresponding bucket
    // if key exists in bucket and is === to new key, overwrite existing key
  }

  get(key) {
    let index = this.hash(key);
    console.log(index);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    } else {
      return this.buckets[index].find(key);
    }
  }

  has(key) {
    let index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    } else {
      return this.buckets[index].containsKey(key);
    }
  }

  remove(key) {
    let index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    } else {
      this.buckets[index].removeKey(key);
      console.log(this.buckets[index]);
    }
  }

  length() {}

  clear() {}

  keys() {}

  values() {}

  entries() {}
}

export { HashMap };
