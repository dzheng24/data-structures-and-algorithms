'use strict';

const longestCommonPrefix = require('../prefix').longestCommonPrefix;

describe('testing the longest common prefix function', () => {
  it('can return the correct characters', () => {
    expect(longestCommonPrefix(['flower','flow','flight'])).toEqual('fl')
  })

  it('can return empty string when there is no common prefix', () => {
    expect(longestCommonPrefix(['dog','racecar','car'])).toEqual('')
  })
})
