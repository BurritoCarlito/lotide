// implement a fuction which takes in an object and a value. It should scan the object and return the first key which contains the given value. if no key with that given value is found, then it should be returned undefined.


const findKeyByValue = function(object, showName) {
  for (const keys in object) {
    if (showName === object[keys]) {
      return keys;
    }
  }
};

module.exports = findKeyByValue;