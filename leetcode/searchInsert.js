/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    let index = 0;
    for(const num of nums) {
        if(target <= num) {
            return index;
        } else {
            index ++;
        }
    }
    return index;
};
// @lc code=end

