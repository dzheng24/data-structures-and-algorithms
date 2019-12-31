'use strict';

const singleNumber = require('../single-number').singleNumber;

describe('testing single-number code challenge', () => {
  it('can return the correct number from an array', () => {
    expect(singleNumber([4,4,1,2,1,5,5,9,2])).toEqual(9);
    expect(singleNumber([-1,0,0,1,2,1,2])).toEqual(-1);
  })
})
