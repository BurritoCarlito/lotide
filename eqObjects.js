// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;