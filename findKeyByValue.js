const findKeyByValue = function(object, showName) {
  for (const keys in object) {
    if (showName === object[keys]) {
      return keys;
    }
  }
};

module.exports = findKeyByValue;