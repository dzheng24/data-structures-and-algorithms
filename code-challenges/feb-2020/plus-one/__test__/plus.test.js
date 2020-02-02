'use strict';

const plusOne = require('../plus').plusOne;

describe('testing the plus one function', () => {
  it('can add one to the integer', () => {
    expect(plusOne([2,3,4])).toEqual([2,3,5]);
    expect(plusOne([9])).toEqual([1,0]);
  })
})
