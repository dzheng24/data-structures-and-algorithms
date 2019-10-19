'use strict';

const binarySearch = require('../arrayBinarySearch/array-binary-search.js');


describe('testing binarySearch', () => {
  test('It should return the index of the element matching the search key input', () => {
    expect(binarySearch([4,8,15,23,42],15)).toStrictEqual(2);
    expect(binarySearch([11,22,33,44,55,66,77],90)).toStrictEqual(-1);
  })
})
