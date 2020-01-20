'use strict';

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
    if (nums[i] < target && nums[i + 1] > target) {
      return i + 1;
    }
    if (nums[0] > target) {
      return 0;
    }
    if (nums[nums.length - 1] < target) {
      return nums.length;
    }
  }
}

module.exports = {
  searchInsert
}

