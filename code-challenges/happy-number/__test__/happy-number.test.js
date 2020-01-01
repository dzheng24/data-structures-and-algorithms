'use strict';

const isHappy = require('../happy-number').isHappy;

describe('testing happy number validator', () => {
  it('can return false when number is not happy', () => {
    expect(isHappy(21)).toEqual(false);
  })

  it('can return true when number is happy', () => {
    expect(isHappy(19)).toEqual(true);
    expect(isHappy(7)).toEqual(true);
  })
})

