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

    this.maxLoad = this.capacity * loadFactor;

    this.buckets = this.createBuckets();
  }

  // Methods
  createBuckets() {
    return Array.from({ length: this.capacity }, () => {
      return new LinkedList();
    });
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + (key.charCodeAt(i) % this.capacity);
      // apply modulo here to prevent integers from exceeding the max allowed value by JScript
    }
    return hashCode % this.capacity;
  }

  checkCap() {
    console.log(this.length());
    console.log(this.maxLoad);
    console.log(this.capacity);
    if (this.length() > this.maxLoad) {
      // Maxload needs to be updated with capacity to avoid an endless loop!
      this.capacity *= 2;
      this.maxLoad = this.capacity * this.loadFactor;
      console.log(this.maxLoad);
      console.log(this.capacity);
      this.rehashEntries();
    }
  }

  rehashEntries() {
    // save all entries as an arr with .entries()
    // clear method is not necessary as the entire map is being overwritten
    // for (const entries of arr)
    // call set(entries[0], entries[1])

    const allEntries = this.entries();
    console.log(allEntries);
    // this.clear();
    this.buckets = this.createBuckets();
    for (const entryPair of allEntries) {
      console.log(entryPair);
      this.set(entryPair[0], entryPair[1]);
    }
  }

  set(key, value) {
    let index = this.hash(key);
    console.log(`${value} ${key} goes to bucket: ${index}`);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    } else {
      if (this.buckets[index].containsKey(key)) {
        this.buckets[index].changeAtKey(key, value);
      } else {
        this.buckets[index].append(key, value);
        this.checkCap();
      }
    }
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
    console.log(index);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    } else {
      this.buckets[index].removeKey(key);
      console.log(this.buckets[index]);
    }
  }

  length() {
    let sum = 0;
    for (const bucket of this.buckets) {
      sum += bucket.size();
    }
    return sum;
  }

  clear() {
    for (const bucket of this.buckets) {
      if (bucket.head != null) {
        bucket.head = null;
      }
    }
  }

  keys() {
    const allKeys = [];
    for (const bucket of this.buckets) {
      const currentKeys = bucket.getProperty("key");
      if (currentKeys != null) {
        allKeys.push(...currentKeys);
      }
    }
    return allKeys;
  }

  values() {
    const allVals = [];
    for (const bucket of this.buckets) {
      const currentVals = bucket.getProperty("value");
      if (currentVals != null) {
        allVals.push(...currentVals);
      }
    }
    return allVals;
  }

  entries() {
    const allEntries = [];
    for (const bucket of this.buckets) {
      const currentEntries = bucket.getEntries();

      if (currentEntries != null) {
        allEntries.push(currentEntries);
      }
    }
    return allEntries.flat();
  }
}

export { HashMap };
