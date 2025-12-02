import { HashMap } from "./script.js";

const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
test.set("lion", "tan");

console.log(test.get("apple"));
console.log(test.get("jacket"));
console.log(test.get("sangria"));

test.has("frog");
test.has("turtle");

test.remove("kite");
test.set("kite", "rainbow");
test.remove("kite");

test.remove("dog");
// test.remove("lion");

console.log(test);
console.log(test.buckets);
