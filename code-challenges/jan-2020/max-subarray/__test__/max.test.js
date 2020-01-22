'use strict';

const maxSubArray = require('../max').maxSubArray;

describe('testing the max subarray function', () => {
  it('can return the highest sum of the contiguous subarray', () => {
    expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toEqual(6);
  })
})
