'use strict';

const mergeSort = require('../merge-sort.js').mergeSort

describe('testing merge sort', () => {
  it('can sort a reverse-sorted array', () => {
    let arr = [20,18,12,8,5,-2];
    expect(mergeSort(arr)).toEqual([-2,5,8,12,18,20]);
  })

  it('can sort an array with a few uniques', () => {
    let arr = [5,12,7,5,5,7];
    expect(mergeSort(arr)).toEqual([5,5,5,7,7,12]);
  })

  it('can sort a nearly sorted array', () => {
    let arr = [2,3,5,7,13,11];
    expect(mergeSort(arr)).toEqual([2,3,5,7,11,13]);
  })
});
