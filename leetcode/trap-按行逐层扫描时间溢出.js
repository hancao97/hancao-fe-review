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
  let hasHeight = true;
  let currentHeight = 1;
  const len = height.length;
  let rainCount = 0;
  while(hasHeight) {
    hasHeight = false;
    let index;
    for(let i = 0;i < len;i++) {
      if(height[i] >= currentHeight) {
        hasHeight = true;
        if(index == undefined) {
          index = i;
        } else {
          rainCount += i - index - 1;
          index = i;
        }
      }
    }
    currentHeight++;
  }
  return rainCount;
};
// @lc code=end

