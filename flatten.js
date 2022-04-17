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


module.exports = flatten;