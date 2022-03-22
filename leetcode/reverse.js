/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
  const isMinus = x < 0;
  const num = Number(`${isMinus?'-':''}${String(Math.abs(x)).split('').reverse().join('')}`);
  if(num >= Math.pow(2, 31) || num < Math.pow(-2, 31)) {
    return 0;
  }
  return num;
};