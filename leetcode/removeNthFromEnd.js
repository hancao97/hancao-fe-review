/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
  const root = new ListNode(0, head)
  let count = 0;
  let node = root;
  let currentNode = root;
  while(node) {
    node = node.next;
    if(count > n) {
      currentNode = currentNode.next;
    } 
    count++;
  }
  currentNode.next = currentNode.next.next;
  return root.next;
};
// @lc code=end

