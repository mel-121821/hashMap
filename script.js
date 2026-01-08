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

    this.buckets = Array.from({ length: this.capacity }, () => {
      return new LinkedList();
    });
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
      if (this.buckets[index].containsKey(key)) {
        this.buckets[index].changeAtKey(key, value);
      } else {
        this.buckets[index].append(key, value);
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

  // Problem breakdown:

  // When getEntries is called, it returns an array of entries. If only one set of entries is present, there is no issue, but if there are more than one, the entries are nested in an additional array which is then added as is to the final array that is meant to contain all entries

  // These nested elements need to be extracted and pushed to the final product individually

  // Issues:

  // Null values are skipped (solved)
  // The resulting array of arrays is not iterable, may need to use a recursive fn() to separate the individual entries
  // The following will not work:
  // for (const arr of currentEntries.length) {
  //   allEntries.push(arr);
  // }

  entries() {
    const allEntries = [];
    let finalArr = [];
    for (const bucket of this.buckets) {
      const currentEntries = bucket.getEntries();

      if (currentEntries != null) {
        // console.log(currentEntries);
        const firstElement = currentEntries[0];
        const secondElement = currentEntries[1];

        // currentEntries.shift();
        // console.log(currentEntries);

        // console.log(`First element is:`);
        // console.log(firstElement);
        // console.log("is it an arrray?");
        // console.log(Array.isArray(firstElement));
        // console.log("First element of first element is:");
        // console.log(firstElement[0]);
        // console.log("is array?");
        // console.log(Array.isArray(firstElement[0]));

        // need a recursive fn() here
        // if arr contains another arr -> unwrap and step into new arr

        allEntries.push(currentEntries);
        // finalArr = this.unwrapArr(allEntries);
      }
    }
    // return finalArr;
    return allEntries;
  }

  unwrapArr(arr) {
    // make a copy of arr
    let copy = arr.slice();
    let finalArr = [];
    // base case - arr length == 0
    if (copy.length == 0) finalArr;
    // if the first element of copy is not a nested array (aka. is a value, push it to final arr)
    // used arr.flatten to one level here, otherwise an entry pair will still register as an arr
    else if (Array.isArray(copy.flat()[0]) === false) {
      console.log(copy);

      let first = copy.shift();
      console.log(first);

      // need to use push here, otherwise end result will be undefined
      finalArr.push(first);
      console.log(finalArr);

      // if arr.push is used here, it causes an integer to the end of the finalArr (assuming in place of the still incomplete result of this.unwrapArr(copy))
      return finalArr.concat(this.unwrapArr(copy));
      // console.log(finalArr);
    } else {
      console.log("else block runs to unwrap");
      console.log(copy[0]);

      return finalArr.concat(this.unwrapArr(copy[0]));
    }
    console.log(finalArr);
    return finalArr;
  }
}

export { HashMap };
