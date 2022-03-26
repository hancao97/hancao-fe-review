/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
  const romanMap = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ]);
  const len = s.length;
  let index = 0;
  let char = s[0];
  let charNum = romanMap.get(char);
  let charNext = '';
  let charNextNum;
  let res = 0;
  while(char) {
    if(index == len - 1) return res + charNum;
    charNext = s[index + 1];
    charNextNum = romanMap.get(charNext);
    if(charNextNum > charNum) {
      res -= charNum;
    } else {
      res += charNum;
    }
    charNum = charNextNum;
    char = charNext;
    index++;
  };
};
// @lc code=end

