const without = function(originalArray, itemsToRemove) {
  let newArray = [];
  for (const original of originalArray) {
    let removeItem = false;
    for (const item of itemsToRemove) {
      if (item === original) {
        removeItem = true;
      }
    }
    if (!removeItem) {
      newArray.push(original);
    }
  }
  return newArray;
};

module.exports = without;