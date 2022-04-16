const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual("LighthouseLabs", "Bootcamp");
assertArraysEqual(1, 1);
assertArraysEqual("Carlo", "Ian");
assertArraysEqual("Carlo", "Carlo");
assertArraysEqual(3, 3);
assertArraysEqual(2010, 2022);

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);