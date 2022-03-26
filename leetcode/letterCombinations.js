/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
  if(!digits) return [];
  const letters = [
    [],
    [],
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w', 'x', 'y', 'z'],
  ];
  let res = [''];
  for(const digit of digits) {
    const current = [];
    for(const item of res) {
      current.push(...letters[digit].map(letter => `${item}${letter}`));
    }
    res = current;
  }
  return res;
};
// @lc code=end

