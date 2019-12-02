'use strict';

const repeatedWord = require('../repeated-word');

describe('testing the repeated word function', () => {
  it('can find the repeated word in a short sentence', () => {
    expect(repeatedWord('once upon a time, there was a princess named Elsa')).toBe('a');
  })

  it('can find the repeated word regardless of case sensitivity', () => {
    expect(repeatedWord('It was the best of times, it was the worst of times')).toBe('it');
  })

  it('can find the repeated word with punctuation', () => {
    expect(repeatedWord('It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York')).toBe('summer');
  })
})


