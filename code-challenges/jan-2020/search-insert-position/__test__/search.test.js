'use strict';

const searchInsert = require('../search').searchInsert;

describe('testing the search insert function', () => {
  it('can return the correct index when the number is in the array', () => {
    expect(searchInsert([4, 6, 8, 9, 10], 9)).toEqual(3);
    expect(searchInsert([2, 6, 8, 10, 11], 2)).toEqual(0);
  })

  it('can place the number in the correct index', () => {
    expect(searchInsert([4, 6, 8, 9, 10], 7)).toEqual(2);
    expect(searchInsert([4, 6, 8, 9, 10], 11)).toEqual(5);
    expect(searchInsert([3, 8, 11, 88, 90], 2)).toEqual(0);
  })
})
