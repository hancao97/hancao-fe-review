/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  const stack = [];
  for(const char of s) {
    if(char == ']') {
      const pop = stack.pop();
      if(pop != '[') return false;
    } else if (char === '}') {
      const pop = stack.pop();
      if(pop != '{') return false;
    } else if (char === ')') {
      const pop = stack.pop();
      if(pop != '(') return false;
    } else {
      stack.push(char);
    }
  }
  return stack.length == 0;
};
// @lc code=end

