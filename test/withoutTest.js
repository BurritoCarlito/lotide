const without = require('../without');
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
console.log(without(words, ["hello", "world",]));
assertArraysEqual(without(words, ["hello", "world"]), ["lighthouse"]);

const words2 = ["hello", "world", "lighthouse"];
without(words2, ["lighthouse", "hello"]);
assertArraysEqual(without(words2, ["hello", "world"]), ["world"]);