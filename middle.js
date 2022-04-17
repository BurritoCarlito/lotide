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


module.exports = middle;