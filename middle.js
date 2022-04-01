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

const middle = function(originalArray) {
  let midArray = [];
  let middleIndex = Math.floor(originalArray.length / 2);// floor ex. if 2.5 -> 2
  if (originalArray.length <= 2) {
    return midArray;
  } else if (originalArray.length % 2 === 0) {
    midArray.push(originalArray[middleIndex - 1]);
    midArray.push(originalArray[middleIndex]);
    return midArray;
  } else {
    midArray.push(originalArray[middleIndex]);
    return midArray;
  }
};


assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []

assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]

assertArraysEqual(middle([1, 2, 3, 4]), [2,3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]); // => [3, 4]
