'use strict';

function binarySearch (arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

module.exports = binarySearch;


console.log((binarySearch([4,8,15,23,42], 15)));
console.log((binarySearch([11,22,33,44,55,66,77], 90)));
