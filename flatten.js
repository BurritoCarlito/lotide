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


const flatten = function(originalArray) {
  let result = [];
  for (const original of originalArray) {
    console.log(original);
    if (Array.isArray(original)) {
      for (const item of original) {
        result.push(item);
        console.log(item);
      }
    } else {
      result.push(original);
    }
  }
  return result;
};





assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]);
console.log(flatten([1, 2, [3, 4], 5, [6]]));