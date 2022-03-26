/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
  if(strs.length == 1) {
    return strs[0];
  }
  let index = 0;
  const _strs = strs.slice(1);
  const referStr = strs[0];
  while(referStr[index] && _strs.every(str => str[index] === referStr[index])) {
    index ++;
  }
  return referStr.slice(0, index);
};
// @lc code=end

