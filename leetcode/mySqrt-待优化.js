/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
  let n = x;
  while(true) {
    if(n * n == x) {
      return n;
    } else if(n * n > x) {
      n = Math.floor(n/ 2);
    } else if((n + 1) * (n + 1) > x) {
      return n;
    } else {
      const temp = (n + 1) * (n + 1);
      if(temp > x) {
        return n;
      } else if (temp == x) {
        return n + 1;
      } else {
        n++;
        while(true) {
          if(n * n == x) {
            return n;
          }
          const temp = (n + 1) * (n + 1);
          if(temp == x) {
            return n + 1;
          } else if(temp > x) {
            return n;
          } else {
            n ++;
          }
        }
      }
    }
  }
};
// @lc code=end
