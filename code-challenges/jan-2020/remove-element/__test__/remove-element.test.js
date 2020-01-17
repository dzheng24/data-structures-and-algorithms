'use strict';

const removeElement = require('../remove-element').removeElement;

describe('testing the remove element function', () => {
  it('can return the correct length', () => {
    expect(removeElement([1,1,1,2,3,4], 1)).toEqual(3);
    expect(removeElement([3,3,3,3,3,3,3,3,4], 3)).toEqual(1);
    expect(removeElement([1,1,1,2,2,3,3,1], 1)).toEqual(4);
  })
})

