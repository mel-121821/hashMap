import { HashMap } from "./script.js";

const test = new HashMap(0.75);

// First 12 items
test.set("apple", "red"); // bucket 10
test.set("banana", "yellow"); // bucket 5
test.set("carrot", "orange"); // bucket 3
test.set("dog", "brown"); //bucket 12 (conflict!)
test.set("elephant", "gray"); // bucket 1
test.set("frog", "green"); // bucket 4
test.set("grape", "purple"); // bucket 11 (conflict!)
test.set("hat", "black"); // bucket 11 (conflict!)
test.set("ice cream", "white"); // bucket 13
test.set("jacket", "blue"); // bucket 14
test.set("kite", "pink"); // bucket 15
test.set("lion", "golden"); // bucket 12 (conflict!)

// Step 5 - Overwrite a few nodes
test.set("lion", "tan");
test.set("kite", "rainbow");
test.set("jacket", "black leather");
test.set("ice cream", "ripple");

// Step 6 - Populate your hash map with the last node:
test.set("moon", "silver");

// Step 7 - entries should be spread evenly among the expanded buckets

// Step 8 - Overwrite a few more nodes
test.set("apple", "gala");
test.set("frog", "tree");
test.set("hat", "top");

// Step 9 - Test other methods

console.log(test.get("apple"));
console.log(test.get("jacket"));
console.log(test.get("sangria"));

test.has("frog");
test.has("turtle");

test.remove("kite");
test.remove("dog");
test.remove("lion");

test.remove("turtle");
test.remove("apple");

console.log(`Total length of keys = ${test.length()}`);
// test.clear();
console.log(test.keys());
console.log(test.values());
console.log(test.entries());

console.log(test.buckets);
