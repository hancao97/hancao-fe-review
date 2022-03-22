/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
  if(x < 0) {
    return false;
  }
  if(x < 10) {
    return true;
  }
  let reverseNumber = 0;
  let baseNumber = x;
  while(baseNumber) {  
    reverseNumber = reverseNumber * 10 + baseNumber % 10;
    baseNumber = parseInt(baseNumber / 10);
  }
  return reverseNumber == x;
};
// @lc code=end

