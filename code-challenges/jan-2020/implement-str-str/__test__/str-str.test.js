'use strict';

const strStr = require('../str-str').strStr;

describe('testing strStr function', () => {
  it('can return the correct index at the first occurance', () => {
    expect(strStr('wilson','ls')).toEqual(2);
    expect(strStr('lebron','on')).toEqual(4);
  })

  it('can return -1 if the needle is not part of the haystack', () => {
    expect(strStr('metcalf', 'dk')).toEqual(-1);
    expect(strStr('marshawn', 'rsa')).toEqual(-1);
  })
})
