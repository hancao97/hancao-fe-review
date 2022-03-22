/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

 const isMatch = (s, p) => {
  if (s == null || p == null) return false;
  const sLen = s.length;
  const pLen = p.length;
  const dp = new Array(sLen + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(pLen + 1).fill(false);
  }
  dp[0][0] = true;
  for (let j = 1; j < pLen + 1; j++) {
    if (p[j - 1] == "*") dp[0][j] = dp[0][j - 2];
  }
  for (let i = 1; i < sLen + 1; i++) {
    for (let j = 1; j < pLen + 1; j++) {
      if (s[i - 1] == p[j - 1] || p[j - 1] == ".") {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] == "*") {                                                                                                                   
        if (s[i - 1] == p[j - 2] || p[j - 2] == ".") {
          dp[i][j] = dp[i][j - 2] || dp[i - 1][j - 2] || dp[i - 1][j];
        } else {
          dp[i][j] = dp[i][j - 2];
        }
      }
    }
  }
  return dp[sLen][pLen];
};

// @lc code=end

