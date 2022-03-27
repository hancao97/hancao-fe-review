/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
  let node = head;
  if(node && node.next) {
    head = node.next;
    let behind = node.next;
    node.next = behind.next;
    behind.next = node;
  }
  while(node && node.next && node.next.next) {
    let behind = node.next;
    let behindMore = behind.next
    node.next = behindMore;
    behind.next = behindMore.next
    behindMore.next= behind;
    node = behind;
  }
  return head;
};
// @lc code=end

