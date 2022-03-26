/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
  let arr = ['()'];
  if(n == 1) {
    return ['()'];
  }
  for(let i = 2; i <= n; i ++) {
    const set = new Set();
    for(const str of arr) {
      const len = str.length;
      for(let c = 0; c < len;c++) {
        set.add(`${str.substring(0, c)}()${str.substring(c, len)}`);
      };
    }
    arr = [...set];
  } 
  return arr;
};
// @lc code=end

