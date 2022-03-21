/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start

// #1#2#
/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
  const sLen = s.length;
  let begin = 0;
  let len = 0;
  const getPalindrome = (s, i) => {
    let oddOffset = 1;
    let evenOffset = 0;
    const isOdd = len % 2 == 1;
    const halfLen = Math.floor(len / 2);
    if(isOdd) {
      if(s[i - halfLen - 1] != s[i + halfLen + 1] && s[i - halfLen] != s[i + halfLen +1]) {
        return {
          _begin: 0,
          _len: 0
        }
      }
    } else if(!isOdd){
      if(s[i - halfLen] != s[i + halfLen] && s[i - halfLen] != s[i + halfLen +1]) {
        return {
          _begin: 0,
          _len: 0
        }
      }
    }
    // 奇数个
    while(i - oddOffset >= 0 && i + oddOffset <= sLen - 1 && s[i - oddOffset] == s[i+oddOffset]) {
      oddOffset++;
    }
    oddOffset--;
    // 偶数个
    while(i - evenOffset >= 0 && i + evenOffset + 1 <= sLen - 1 && s[i - evenOffset] == s[i + evenOffset + 1]) {
      evenOffset++;
    }
    const oddLen = 1 + oddOffset * 2;
    const evenLen = evenOffset * 2;
    if(oddLen > evenLen) {
      return {
        _begin: i - oddOffset,
        _len: oddLen
      }
    } else {
      return {
        _begin: i - evenOffset + 1,
        _len: evenLen
      }
    }
  };
  for(let i = 0;i <= sLen - len / 2 - 1;i++) {
    const {_len, _begin} = getPalindrome(s, i);
    if(_len > len) {
      len = _len;
      begin = _begin;
    }
  }
  return s.substring(begin, begin + len);
};
// @lc code=end

