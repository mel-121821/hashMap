import { LinkedList } from "./linked-list.js";

class HashBase {
  constructor(loadFactor = 0.75) {
    this.capacity = 16;
    this.loadFactor = loadFactor;
    this.maxLoad = this.capacity * loadFactor;
    this.buckets = this.createBuckets();
  }

  createBuckets() {
    return Array.from({ length: this.capacity }, () => {
      return new LinkedList();
    });
  }

  check_OutOfBounds(index) {
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + (key.charCodeAt(i) % this.capacity);
    }
    return hashCode % this.capacity;
  }

  check_LoadFactorExceeded() {
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
    this.check_OutOfBounds(index);
    return this.buckets[index].containsKey(key);
  }

  remove(key) {
    let index = this.hash(key);
    this.check_OutOfBounds(index);
    this.buckets[index].removeKey(key);
    console.log(this.buckets[index]);
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

  set(key) {
    let index = this.hash(key);
    this.check_OutOfBounds(index);
    console.log(`${key} goes to bucket: ${index}`);
    if (this.buckets[index].containsKey(key)) {
      console.log(`${key} at index ${index} already exists`);
    } else {
      this.buckets[index].append(key);
      if (this.check_LoadFactorExceeded()) {
        this.rehashKeys();
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

  set(key, value) {
    let index = this.hash(key);
    this.check_OutOfBounds(index);
    console.log(`${value} ${key} goes to bucket: ${index}`);
    if (this.buckets[index].containsKey(key)) {
      this.buckets[index].changeAtKey(key, value);
    } else {
      this.buckets[index].append(key, value);
      if (this.check_LoadFactorExceeded()) {
        this.rehashEntries();
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
    this.check_OutOfBounds(index);
    return this.buckets[index].find(key);
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
