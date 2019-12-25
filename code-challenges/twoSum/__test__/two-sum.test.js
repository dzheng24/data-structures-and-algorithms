'use strict';

const twoSum = require('../two-sum');

describe('testing the twoSum function', () => {
  it('can correctly return an array of numbers', () => {
    let nums = [2,7,11,15];
    let target = 18;
    expect(twoSum(nums,target)).toEqual([1,2])
    let target2 = 9;
    expect(twoSum(nums,target2)).toEqual([0,1])
  }
  )
})
