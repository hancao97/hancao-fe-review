/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  const len = height.length;
  let left = 0;
  let right = len - 1;
  let res = 0;
  while(left < right) {
    let area;
    if(height[left] < height[right]) {
      area = height[left] * (right - left);
      left ++;
    } else {
      area = height[right] * (right - left);
      right --;
    }
    if(area > res) res = area;
  }
  return res;
};
// @lc code=end

