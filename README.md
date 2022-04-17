# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @irt.21/lotide`

**Require it:**

`const _ = require('@irt.21/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head()`: returns the first value of an array.
* `tail()`: returns everything except for the first value of an array.
* `middle()`: returns the middle item in an array, returns the 2 middle items if array.length is even. 
* `assertArraysEqual()`: takes in 2 arrays and console.log appropriate message if successful or failed.
* `assertEqual()`: console.logs a message if assertions are either successful or failed.
* `assertObjectsEqual()`: take in 2 objects and console.log appropriate message.
* `countLetters()`: returns a count of each of the letters in the sentence (string).
* `countOnly()`: returns how many instances of each string were found in array of strings.
* `eqArrays()`: takes in 2 arrays and reutrns true or false based if they are a perfect match.
* `eqObjects()`: takes in 2 objects and returns true if both have identical keys and values.
* `findKey()`: helps search for a key in an object where it's value matches a given value.
* `findKeyByValue()`: takes in object and value, scans object to return the first key with given value.
* `flatten()`: takes in an array containing elements and returns a one new array.
* `letterPositions()`: returns all the indices in the string where each character is found.
* `map()`: takes in 2 arguments and return a new array based on the results of callback function.
* `takeUntil()`: take in 2 parameters and will return new array until callbacks returns truthy value.
* `without()`: returns a subset of a given arraym removing unwanted elements.
