const assertEqual = require('../assertEqual');
const tail = require('../tail');

assertEqual(tail([5,6,7]), 5);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!


const words2 = ["Hello", "my", "name", "is", "Carlo"];
tail(words2);
assertEqual(words2.length, 5);
