'use strict';

const countAndSay = require('../count').countAndSay;

describe('testing the count and say function', () => {
  it('can return the correct result', () => {
    expect(countAndSay(2)).toEqual('11');
    expect(countAndSay(3)).toEqual('21');
    expect(countAndSay(6)).toEqual('312211');
  })
})
