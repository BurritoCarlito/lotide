// it will take in 2 parameters as well
// 1. the array to work with and 2. the callback (which lodas calls predicate)


const takeUntil = function(array, callback) {
  let results = [];
  for (const item of array) {
    if (callback(item)) {
      return results;
    }
    results.push(item);
  }
};

module.exports = takeUntil;