'use strict';

const isValid = require('../valid').isValid;

describe('testing isValid function', () => {
  it ('can return true or false based on string input', () => {
    expect(isValid('[]')).toEqual(true);
    expect(isValid('()[]{}')).toEqual(true);
    expect(isValid('[()]')).toEqual(true);
    expect(isValid('(]')).toEqual(false);
    expect(isValid('([)]')).toEqual(false);
  })
})
