/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function (nums) {
  let length = nums.length;
  nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < length; i++) {
    if (nums[i] > 0) {
      return res;
    }
    if (i > 0 && nums[i] === nums[i - 1])
      continue;
    let Left = i + 1;
    let Right = length - 1;
    while (Left < Right) {
      if (nums[i] + nums[Left] + nums[Right] == 0) {
        res.push([nums[i], nums[Left], nums[Right]]);
        while (Left < Right && nums[Left] == nums[Left + 1]) {
          Left++;
        }
        while (Left < Right && nums[Right] === nums[Right - 1]) {
          Right--;
        }
        Left++;
        Right--;
      }
      else if (nums[i] + nums[Left] + nums[Right] > 0) {
        Right--;
      } else {
        Left++;
      }
    }


  }
  return res
};

// @lc code=end

