/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function (nums, target) {
  let length = nums.length;
  nums.sort((a, b) => a - b);
  let res = [];
  let sumTemp = 0;
  for (let first = 0; first < length - 3; first++) {
    if (nums[first] > target && nums[first] > 0) {
      return res;
    }
    if (first > 0 && nums[first] === nums[first - 1]) {
      continue;
    }
    for (let second = first + 1; second < length - 2; second++) {
      if (nums[first] + nums[second] > target && nums[second] > 0) {
        break;
      }
      if (second > first + 1 && nums[second] === nums[second - 1]) {
        continue;
      }
      let Left = second + 1;
      let Right = length - 1;
      while (Left < Right) {
        sumTemp = nums[first] + nums[second] + nums[Left] + nums[Right];
        if (sumTemp === target) {
          res.push([nums[first], nums[second], nums[Left], nums[Right]]);
          while (Left < Right && nums[Left] === nums[Left + 1]) {
            Left++;
          }
          while (Left < Right && nums[Right] === nums[Right - 1]) {
            Right--;
          }
          Left++;
          Right--;
        }
        else if (sumTemp > target) {
          Right--;
        } else {
          Left++;
        }
      }
    }
  }
  return res;
}

// @lc code=end

