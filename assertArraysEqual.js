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

assertArraysEqual("LighthouseLabs", "Bootcamp");
assertArraysEqual(1, 1);
assertArraysEqual("Carlo", "Ian");
assertArraysEqual("Carlo", "Carlo");
assertArraysEqual(3, 3);
assertArraysEqual(2010, 2022);