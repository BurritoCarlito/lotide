const eqArrays = function(firstArray, secondArray) {
  for (let i = 0; i <= firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray)) {
    console.log(`✅✅✅ Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${firstArray} !== ${secondArray}`);
  }
};

const letterPositions = function(sentence) {
const results = {};
for (let i = 0; i < sentence.length; i++) {
  let letter = sentence[i];
  if (letter !== " ") {
    if (results[letter]){
      results[letter].push(i);
    } else {
      results[letter] = [i];
    }
  }
}
return results;
};
assertArraysEqual(letterPositions("hello").e, [1]);

assertArraysEqual(letterPositions("hello").h, [0] );

console.log(letterPositions("hello"));
console.log(letterPositions("Carlo Tanjuaquio"));
console.log(letterPositions("heLlo"));