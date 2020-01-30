'use strict';

const lengthOfLastWord = require('../word').lengthOfLastWord;

describe('testing the lenght of last word function', () => {
  it('can return the correct length', () => {
    expect(lengthOfLastWord('hello world')).toEqual(5);
    expect(lengthOfLastWord('my name is earl')).toEqual(4);
  })
})
