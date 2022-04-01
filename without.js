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

const without = function(originalArray, itemsToRemove) {
  let newArray = [];
  for (const original of originalArray) {
    let removeItem = false;
    for (const item of itemsToRemove) {
      if (item === original) {
        removeItem = true;
      }
    }
    if (!removeItem) {
      newArray.push(original);
    }
  }
  return newArray;
};

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
console.log(without(words, ["hello", "world",]));
assertArraysEqual(without(words, ["hello", "world"]), ["lighthouse"]);

const words2 = ["hello", "world", "lighthouse"];
without(words2, ["lighthouse", "hello"]);
assertArraysEqual(without(words2, ["hello", "world"]), ["world"]);