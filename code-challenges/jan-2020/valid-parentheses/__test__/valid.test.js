'use strict';

const isValid = require('../valid').isValid;

describe('testing isValid function', () => {
  expect(isValid('[]')).toEqual(true);
  expect(isValid('()[]{}')).toEqual(true);
  expect(isValid('[()]')).toEqual(true);
  expect(isValid('(]')).toEqual(false);
  expect(isValid('([)]')).toEqual(false);
})
