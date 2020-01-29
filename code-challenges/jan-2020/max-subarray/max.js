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

// quadratic time solution
function maxSubArray2 (nums) {
  const n = nums.length;
  let maxSubArraySum = Number.MIN_VALUE;
  for (let left = 0; left < n; left++) {
    let windowSum = 0;
    for (let right = left; right < n; right++) {
      windowSum += nums[right];
      maxSubArraySum = Math.max(maxSubArraySum, windowSum);
    }
  }
  return maxSubArraySum;
}

console.log(maxSubArray2([-2,1,-3,4,-1,2,1,-5,4]));

module.exports = {
  maxSubArray,
  maxSubArray2
}
