# Two Sum II (input array is sorted)

Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

Note:

Your returned answers (both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution and you may not use the same element twice.
Example:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.

- I used a two pointer method; one pointer starts at the beginning of the list, and one starts at the end. If the sum of the two pointers is less than the target, the left pointer increases by one; if the sum is larger than the target, the right pointer decreases by one. 
- Time complexity: O(n);
- Space complexity: O(1);