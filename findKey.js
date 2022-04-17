// implement a function findKey which takes in ana object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, they it should return undefined.

const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return (key);
    }
  }
};

module.exports = findKey;