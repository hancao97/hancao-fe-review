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
    let node, head = null;
    const len = lists.length;
    while(true) {
      let val, postion;
      let count = 0;
      lists.forEach((list, index) => {
        if(!list) {
          count++;
        } else if(val == undefined || list.val < val) {
          postion = index;
          val = list.val;
        }
      })
      if(count == len) {
        return head;
      }
      lists[postion] = lists[postion].next;
      if(!head) {
        node = head = new ListNode(val, null);
      } else {
        node.next = new ListNode(val, null);
        node = node.next;
      }
    }
  };
  // @lc code=end
  
  