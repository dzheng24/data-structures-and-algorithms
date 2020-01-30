'use strict';

const maxSubArrayCubic = require('../max').maxSubArray;
const maxSubArrayQuadratic = require('../max').maxSubArray2;
const maxSubArrayLinear = require('../max').maxSubArray3;

describe('testing the max subarray function', () => {
  it('can return the highest sum using cubic approach', () => {
    expect(maxSubArrayCubic([-2,1,-3,4,-1,2,1,-5,4])).toEqual(6);
  })

  it('can return the highest sum using quadratic approach', () => {
    expect(maxSubArrayQuadratic([-2,1,-3,4,-1,2,1,-5,4])).toEqual(6);
  })

  it('can return the highest sum using the dynamic programming approach', () => {
    expect(maxSubArrayLinear([-2,1,-3,4,-1,2,1,-5,4])).toEqual(6);
  })
})

