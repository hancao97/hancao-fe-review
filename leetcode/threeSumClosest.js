/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let length = nums.length;
  nums.sort((a, b) => a - b);
  let sum;
  for (let i = 0; i < length; i++) {
    if (i > 0 && nums[i] === nums[i - 1])
      continue;
    let Left = i + 1;
    let Right = length - 1;
    while (Left < Right) {
      const num = nums[i] + nums[Left] + nums[Right];
      if (num == target) {
        return target;
      } else {
        if(sum == undefined || Math.abs(sum - target) > Math.abs(num - target)) {
          sum = num;
        }
        if (nums[i] + nums[Left] + nums[Right] > target) {
          Right--;
        } else {
          Left++;
        }
      }
    }
  }
  return sum;
};
// @lc code=end

