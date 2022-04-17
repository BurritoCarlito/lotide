const countLetters = function(sentence) {
  const itemsToCount = sentence.split(' ').join('');
  const results = {};
  for (const item of itemsToCount) {
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
  }
  return results;
};

module.exports = countLetters;