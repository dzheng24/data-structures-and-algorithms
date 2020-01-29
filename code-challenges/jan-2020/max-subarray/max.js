'use strict';

/**
 * @param {number[]} nums
 * @return {number}
 */

// runs in cubic time
var maxSubArray = function(nums) {
  const n = nums.length;
  let maxSubArraySum = Number.MIN_VALUE;

  for (let left = 0; left < n; left++) {
    for (let right = left; right < n; right++) {
      let windowSum = 0;
      for (let k = left; k <= right; k++) {
        windowSum += nums[k];
      }
      maxSubArraySum = Math.max(maxSubArraySum, windowSum)
    }
  }
  return maxSubArraySum;
}

module.exports = {
  maxSubArray
}
