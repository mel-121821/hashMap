import { HashMap } from "./script.js";
import { HashSet } from "./script.js";

// Tests for HashMap
const test_Map = new HashMap(0.75);

// First 12 items
test_Map.set("apple", "red"); // bucket 10
test_Map.set("banana", "yellow"); // bucket 5
test_Map.set("carrot", "orange"); // bucket 3
test_Map.set("dog", "brown"); //bucket 12 (conflict!)
test_Map.set("elephant", "gray"); // bucket 1
test_Map.set("frog", "green"); // bucket 4
test_Map.set("grape", "purple"); // bucket 11 (conflict!)
test_Map.set("hat", "black"); // bucket 11 (conflict!)
test_Map.set("ice cream", "white"); // bucket 13
test_Map.set("jacket", "blue"); // bucket 14
test_Map.set("kite", "pink"); // bucket 15
test_Map.set("lion", "golden"); // bucket 12 (conflict!)

// Step 5 - Overwrite a few nodes
test_Map.set("lion", "tan");
test_Map.set("kite", "rainbow");
test_Map.set("jacket", "black leather");
test_Map.set("ice cream", "ripple");

// Step 6 - Populate your hash map with the last node:
test_Map.set("moon", "silver");

// Step 7 - entries should be spread evenly among the expanded buckets

// Step 8 - Overwrite a few more nodes
test_Map.set("apple", "gala");
test_Map.set("frog", "tree");
test_Map.set("hat", "top");

// Step 9 - test_Map other methods

console.log(test_Map.get("apple"));
console.log(test_Map.get("jacket"));
console.log(test_Map.get("sangria"));

test_Map.has("frog");
test_Map.has("turtle");

test_Map.remove("kite");
test_Map.remove("dog");
test_Map.remove("lion");

test_Map.remove("turtle");
test_Map.remove("apple");

console.log(`Total length of keys = ${test_Map.length()}`);
// test_Map.clear();
console.log(test_Map.keys());
console.log(test_Map.values());
console.log(test_Map.entries());

console.log(test_Map.buckets);

// Tests for HashSet
const test_Set = new HashSet(0.5);

console.log(test_Set);

test_Set.set("pop");
test_Set.set("day");
test_Set.set("night");
test_Set.set("peach");
test_Set.set("berry");
test_Set.set("soda");
test_Set.set("sunny");
test_Set.set("starry");
test_Set.set("fuzzy");
test_Set.set("blue");

console.log(test_Set.has("day"));

test_Set.remove("night");
console.log(test_Set.keys());
console.log(test_Set.buckets);
