const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');





assertArraysEqual(letterPositions("hello").e, [1]);

assertArraysEqual(letterPositions("hello").h, [0]);

console.log(letterPositions("hello"));
console.log(letterPositions("Carlo Tanjuaquio"));
console.log(letterPositions("heLlo"));