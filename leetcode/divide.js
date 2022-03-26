/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
 var divide = function(dividend, divisor) {
  const sign = (dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0);
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  const _divisor = divisor;
  let count = 0;
  let pow = 0;
  while(dividend >= divisor) {
    count += Math.pow(2, pow);
    dividend -= divisor;
    divisor *= 2;
    pow ++;
  }
  if(dividend >= _divisor) {
    count += divide(dividend, _divisor);
  }
  count *= sign ? 1 : -1;
  if(count > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
  return count;
};
// @lc code=end

