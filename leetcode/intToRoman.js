/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const NUMS = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const ROMON_CHARS = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let index = 0;
  let romonResStr = '';
  let temp = 0;
  while (index < 13 && num > 0) {
    temp = Math.floor(num / NUMS[index]);
    if (temp > 0) {
      romonResStr += ROMON_CHARS[index].repeat(temp);
      num -= NUMS[index] * temp;
    }
    index++;
  }
  return romonResStr;
};