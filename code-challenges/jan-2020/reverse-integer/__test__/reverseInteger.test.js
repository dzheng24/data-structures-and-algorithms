'use strict';

const reverse = require('../reverseInteger').reverse

describe('testing the reverseInteger function', () => {
  it('can reverse numbers without zeros', () => {
    expect(reverse(123)).toEqual(321);
    expect(reverse(589)).toEqual(985);
  })

  it('can reverse negative numbers', () => {
    expect(reverse(-189)).toEqual(-981);
    expect(reverse(-456)).toEqual(-654);
  })

  it('can reverse numbers with zeros in them', () => {
    expect(reverse(2340)).toEqual(432);
    expect(reverse(100)).toEqual(1);
  })
})
