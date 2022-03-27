/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
  let isStart = false;
  let res = '';
  for(const char of s) {
    if(!isStart && char == ' ') {
      continue;
    }
    if(!isStart && ['+', '-'].includes(char)) {
      isStart = true;
      res += char;
      continue;
    }
    if(!isStart && /[0-9]/.test(char)) {
      isStart = true;
      res += char;
      continue;
    }
    if(!isStart && /[^ 0-9+-]/.test(char)) {
      return 0;
    }
    if(isStart && /[0-9]/.test(char)) {
      res += char;
      continue;
    }
    if(isStart && !/[0-9]/.test(char)) {
       break;
    }
  }
  res = Number(res);
  if(res < 0) {
    return Math.max(Math.pow(-2, 31), res);
  } else if(res > 0){
    return Math.min(Math.pow(2, 31) - 1, res);
  } else {
    return 0;
  }
};
// @lc code=end

