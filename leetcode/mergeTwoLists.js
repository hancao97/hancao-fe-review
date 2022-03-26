/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
  let node, head = null;
  while(list1 || list2) {
    let val;
    if(!list2 || list1 && list1.val < list2.val) {
      val = list1.val
      list1 = list1.next;
    } else {
      val = list2.val;
      list2 = list2.next;
    }
    if(!head) {
      node = head = new ListNode(val, null);
    } else {
      node.next = new ListNode(val, null);
      node = node.next;
    }
  }
  return head;
};
// @lc code=end

