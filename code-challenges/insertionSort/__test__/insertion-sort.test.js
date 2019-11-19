'use strict';

const insertionSort = require('../insertion-sort.js');

describe('testing insertion-sort method', () => {
  it('can sort through reverse-sorted array', () => {
    let arr1 = [20,18,12,8,5,-2];
    expect(insertionSort(arr1)).toStrictEqual([-2,5,8,12,18,20])
  });

  it('can sort through array with a few uniqes', () => {
    let arr2 = [5,12,7,5,5,7];
    expect(insertionSort(arr2)).toStrictEqual([5,5,5,7,7,12])
  });

  it('can sort through a nearly sorted array', () => {
    let arr3 = [2,3,5,7,13,11];
    expect(insertionSort(arr3)).toStrictEqual([2,3,5,7,11,13])
  });
})


