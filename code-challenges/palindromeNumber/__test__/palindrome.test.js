'use strict';

const isPalindromeTwo = require('../palindrome-number').isPalindromeTwo

describe('testing number palindromes', () => {
  it('can return true if there is a positive palindrome', () => {
    expect(isPalindromeTwo(123454321)).toEqual(true);
  })

  it('can return false if there is no palindrome', () => {
    expect(isPalindromeTwo(-12321)).toEqual(false);
    expect(isPalindromeTwo(100)).toEqual(false);
  })
})
