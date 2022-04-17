
/*
the map function will take in 2 arguments:
1. an array to map
2. a callback function

the map function will return a new array based on the results of the call back function
*/



const map = function(array, callback) {
  let results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;