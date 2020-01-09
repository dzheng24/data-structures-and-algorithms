'use strict';

const romanToInteger = require('../romanToInteger').romanToInteger;

describe('testing roman to integer function', () => {
  it('can return number for characters that are the same', () => {
    expect(romanToInteger('III')).toEqual(3);
  });

  it('can return number for two characters that are different', () => {
    expect(romanToInteger('IV')).toEqual(4);
    expect(romanToInteger('VI')).toEqual(6);
  })

  it('can return number for mixed amount of characters', () => {
    expect(romanToInteger('LVIII')).toEqual(58);
    expect(romanToInteger('MCMXCIV')).toEqual(1994);
  })
})
