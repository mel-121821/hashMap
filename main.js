import { HashMap } from "./script.js";

const test = new HashMap();

// test.set("apple", "red"); // bucket 10
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
test.set("lion", "tan"); // bucket 12 (duplicate key && conflict !)

// console.log(test.get("apple"));

// TODO: Fix undefined bucket issue
// if the user tries to access a non-existant element with get() and the bucket does not yet contain a linked list (is undefined) it will not work.
// Fix by creating a linked list for each bucket from the start

console.log(test.get("jacket"));
console.log(test.get("sangria"));

test.has("frog");
test.has("turtle");

test.remove("kite");
test.set("kite", "rainbow");
test.remove("kite");

test.remove("dog");
// test.remove("lion");

test.remove("turtle");
test.remove("apple");

console.log(test);
console.log(test.buckets);
