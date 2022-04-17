const assert = require('chai').assert;
const tail = require('../tail');


describe("#tail", () => {
  it("should return ['Lighthouse, 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("should return ['my', 'name', 'is', 'Carlo'] for ['Hello', 'my', 'name', 'is', 'Carlo']", () => {
    assert.deepEqual(tail(["Hello", "my", "name", "is", "Carlo"]), ["my", "name", "is", "Carlo"]);
  });

  it("should return [6, 7] for [5,6,7]", () => {
    assert.deepEqual(tail([5,6,7]), [6, 7]);
  });

  it("should return [] for []", () => {
    assert.deepEqual(([]), []);
  });
});