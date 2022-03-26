/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
  let heightInfo = [];
  let maxHeight = 0;
  for(const heightItem of height) {
    if(heightItem > maxHeight) {
      maxHeight = heightItem;
    }
    heightInfo.push({
      left: maxHeight,
      self: heightItem
    });
  }
  const len = height.length;
  maxHeight = 0;
  for(let i = len - 1; i >= 0; i--) {
    if(height[i] > maxHeight) {
      maxHeight = height[i];
    }
    heightInfo[i].right = maxHeight;
  }
  return heightInfo.reduce((total, current) => {
    const low = Math.min(current.left, current.right);
    if(current.self >= low) return total;
    return total + low - current.self;
  }, 0);
};
// @lc code=end

