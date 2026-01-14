// Note before starting:

// JavaScript’s dynamic nature of arrays allows us to insert and retrieve indexes that are outside our array size range.

// Example: if we create an array of size 16 to represent our buckets, nothing stops us from storing items at index 500. This defeats the purpose of limiting storage size in hash maps, so we need to enforce some restrictions.

// Use the following snippet whenever you access a bucket through an index. We want to throw an error if we try to access an out-of-bounds index:

// if (index < 0 || index >= buckets.length) {
//   throw new Error("Trying to access index out of bounds");
// }

import { LinkedList } from "./linked-list.js";

class HashBase {
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
    if (this.length() > this.maxLoad) {
      this.capacity *= 2;
      this.maxLoad = this.capacity * this.loadFactor;
      return true;
    } else {
      return false;
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
}

class HashSet extends HashBase {
  constructor(loadFactor = 0.75) {
    super(loadFactor);
  }

  // Methods
  set(key) {
    let index = this.hash(key);
    console.log(`${key} goes to bucket: ${index}`);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    } else {
      if (this.buckets[index].containsKey(key)) {
        console.log(`${key} at ${this.buckets[index]} already exists`);
      } else {
        // bucket.append creates a node in the linked list
        // node will set null as the value if one is not added, so this should work without changing the linked list fn()
        this.buckets[index].append(key);
        if (this.checkCap()) {
          console.log("true");
          this.rehashKeys();
        }
      }
    }
  }

  rehashKeys() {
    const allKeys = this.keys();
    this.buckets = this.createBuckets();
    for (const key of allKeys) {
      this.set(key);
    }
  }
}

class HashMap extends HashBase {
  constructor(loadFactor = 0.75) {
    super(loadFactor);
  }

  // Methods
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
        if (this.checkCap()) {
          this.rehashEntries();
        }
      }
    }
  }

  rehashEntries() {
    const allEntries = this.entries();
    this.buckets = this.createBuckets();
    for (const entryPair of allEntries) {
      this.set(entryPair[0], entryPair[1]);
    }
  }

  get(key) {
    let index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    } else {
      return this.buckets[index].find(key);
    }
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

export { HashMap, HashSet };
