const countLetters = function(sentence) {
  const itemsToCount = sentence.split(' ').join(''); // split was used to remove the "space" and then join was used to combine the split strings back together;
  const results = {};
  for (const item of itemsToCount) {
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
  }
  return results;
// this function should take in a sentences (as a string) and then return a count of each of the letters in that sentence.
};

module.exports = countLetters;