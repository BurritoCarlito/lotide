const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected)
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};


// should take in a collection of items and return counts for a specific subset of those items.
// it won't count everything
// in order to decide what to count it will also be given an idea of which items we care about and it will only count those things ignoring the others


// it will be given an array and object , it will return an object containing counts of everything that the input object listed

// should report back how many instances of each string were found in the allItems array of strings

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count


const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    // this for loop allows us to scan the entire list
    // allowing us to loop over all the items in the array and print them out onto the console
    if (itemsToCount[item]) { // helps in being more specific about what should be counted, ignoring the other items
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      // this if statements within the loop increment the counter for each item we are looking for
      }
    }
  }
  return results;
};



const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);