const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  } else if (actual !== expected)
    console.log("🛑🛑🛑 Assertion Failed: " + actual +  " !== " + expected);
};

assertEqual("LighthouseLabs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Carlo", "Ian");
assertEqual("Carlo", "Carlo");
assertEqual(3, 3);
assertEqual(2010, 2022);
