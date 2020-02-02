'use strict';

const plusOne = require('../plus').plusOne;

describe('testing the plus one function', () => {
  it('can add one to the integer', () => {
    expect(plusOne([2,3,4])).toEqual([2,3,5]);
  })

  it('can add one to the integer when the last digit is 9', () => {
    expect(plusOne([9])).toEqual([1,0]);
    expect(plusOne([9,9])).toEqual([1,0,0]);
    expect(plusOne([1,0,9])).toEqual([1,1,0]);
  })
})
