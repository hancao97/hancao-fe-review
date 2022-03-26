/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
  // 1. 分治法
  // 2. 针对暴力破解进行优化，比较大小每次只要用新弹出的和之前第二小的比较就可以了
  // 3. 大不了塞个数组排序之后生成链表...
};
// @lc code=end

