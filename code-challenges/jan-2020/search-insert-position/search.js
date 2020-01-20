'use strict';

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert (nums, target) {
  let nextIndex;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
    if (nums[i] < target && nums[i + 1] > target) {
      nextIndex = i + 1;
      return nextIndex;
    }
    if (nums[0] > target) {
      return 0;
    }
  }
}

console.log(searchInsert([1,3,5,6], 0))

module.exports = {
  searchInsert
}

