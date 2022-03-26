/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
  let max = nums[0];
  let currentSum = 0;
  for(const num of nums) {
    if(currentSum <= 0) {
      currentSum = num;
    } else {
      currentSum += num;
    }
    if(currentSum > max) {
      max = currentSum;
    }
  }
  return max;
};
// @lc code=end

