# hashMap

### Instructions

- [x] Start by creating a `HashMap` class or factory function.

- [x] It should have at least two variables for `load factor` and `capacity`. For a load factor of 0.75 you should have an initial capacity of size 16.

Then proceed to create the following methods:

- [x] `hash(key)` takes a key and produces a hash code with it.

- [x] `set(key, value)` takes two arguments: the first is a key, and the second is a value that is assigned to this key. If a key already exists, then the old value is overwritten.

- [x] `get(key)` takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return `null`.

- [x] `has(key)` takes a key as an argument and returns true or false based on whether or not the key is in the hash map.

- [x] `remove(key)` takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true. If the key isn’t in the hash map, it should return `false`.

- [x] `length()` returns the number of stored keys in the hash map.

- [x] `clear()` removes all entries in the hash map.

- [x] `keys()` returns an array containing all the keys inside the hash map.

- [x] `values()` returns an array containing all the values.

- [x] `entries()` returns an array that contains each `key, value` pair. Example: `[[firstKey, firstValue], [secondKey, secondValue]]`

#### Test Your Hash Map

- [x] Create a new JavaScript file.

- [x] Create a new instance of your hash map and set the load factor to be `0.75`.

```
const test = new HashMap() // or HashMap() if using a factory
```

- [x] Populate your hash map using the `set(key, value)` method by copying the following:

```
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

```

- [x] After populating your hash map with the data above, your hash map’s current load levels should now be at `0.75` (full capacity).

- [x] Now with a full hash map, try overwriting a few nodes using `set(key, value)`. This should only overwrite the existing `values` of your nodes and not add new ones, so `length()` should still return the same value and capacity should remain the same.

- [x] After that, populate your hash map with the last node below. This will make your load levels exceed your `load factor`, triggering your hash map’s growth functionality and doubling its `capacity`:

```
test.set('moon', 'silver')
```

- [x] If you have implemented your hash map correctly, the load levels of your expanded hash map should drop well below your load factor, and the entries should be spread evenly among the expanded buckets.

- [x] With your new hash map, try overwriting a few nodes using `set(key, value)`. Again, this should only overwrite existing `values` of your nodes.

- [x] Test the other methods of your hash map, such as `get(key)`, `has(key)`, `remove(key)`, `length()`, `clear()`, `keys()`, `values()`, and `entries()`, to check if they are still working as expected after expanding your hash map.

#### Extra Credit

-[] Create a `HashSet` class or factory function that behaves the same as a `HashMap` but only contains `keys` with no `values`.

---

### Resources

Array.from():
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from

https://www.programiz.com/javascript/library/array/from

Array.shift()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift

Array.flat():
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

Recursive flattening:
https://stackoverflow.com/questions/39287320/js-array-concatenation-for-results-of-recursive-flattening

Array.concat():
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

Creating an array with recursion:
https://stackoverflow.com/questions/36413478/how-to-create-an-array-of-a-given-value-recursively

Extends Class:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends

---
