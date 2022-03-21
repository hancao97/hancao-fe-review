/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start

/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    const sLen = s.length;
    if(sLen == 1) {
      return s;
    }
    let stringInfo = {
      end: 0,
      begin: 0
    }
    const palindromeSet = new Set();
    for(let subLen = 2; subLen <= sLen; subLen++) {
      for(let begin = 0; begin <= sLen - subLen; begin++) {
        const end = begin + subLen - 1;
        if(s[begin] === s[end]) {
          if(subLen <= 3 || subLen > 3 && palindromeSet.has(`${begin + 1}#${end - 1}`)) {
            palindromeSet.add(`${begin}#${end}`);
            if(subLen > stringInfo.end - stringInfo.begin + 1) {
              stringInfo = {
                begin,
                end
              }
            }
          }
        }
      }
    }
    return s.substring(stringInfo.begin, stringInfo.end + 1);
  };
  // @lc code=end
  
  