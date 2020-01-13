'use strict';

const moveZeroes = require('../move').moveZeroes;

describe('testing the move zeros function', () => {
  it('can correctly move the zeros in an array', () => {
    expect(moveZeroes([1,0,3,3,0,7])).toEqual([1,3,3,7,0,0])
    expect(moveZeroes([0,0,100,4,5,9])).toEqual([100,4,5,9,0,0])
  })
})
