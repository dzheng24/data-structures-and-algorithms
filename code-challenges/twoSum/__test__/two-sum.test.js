'use strict';

const twoSum = require('../two-sum');

describe('testing the twoSum function', () => {
  it('can correctly return an array of numbers', () => {
    let nums = [2,7,11,15];
    let target = 9
    expect(twoSum(nums,target)).toEqual([0,1])
  }
  )
})
