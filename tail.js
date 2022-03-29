const tail = function(actual) {
  return actual.slice(1);
};

console.log(tail);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected)
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

assertEqual(tail([5,6,7]), 5);

const words = ["yo yo", "lighthouse", "labs"];
tail(words);
assertEqual(words.length, 3);