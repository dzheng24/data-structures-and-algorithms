'use strict';

const twoSum = require('../two-sum-sorted').twoSum;

describe('testing the two sum problem with sorted array', () => {
  it('can properly return the indices', () => {
    expect(twoSum([1,2,3,4,5,6,7], 13)).toEqual([6,7])
    expect(twoSum([1,2,3,4,5,6,7], 3)).toEqual([1,2])
  })
});
