const eqArrays = function(firstArray, secondArray) {
  for (let i = 0; i <= firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  let objectOne = Object.keys(object1);
  let objectTwo = Object.keys(object2);
  if (objectOne.length !== objectTwo.length) {
    return false;
  }
  for (const keys of objectOne) {
    if (Array.isArray(object1[keys])) {
      if (eqArrays(object1[keys], object2[keys])) {
        continue;
      } else {
        return false;
      }
    }
    if (object1[keys] === object2[keys]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else if (!(eqObjects(actual, expected))) {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}
    `);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);


