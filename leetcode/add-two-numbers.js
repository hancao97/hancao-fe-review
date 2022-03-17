var addTwoNumbers = function(l1, l2) {
  let isCarryOver = false;
  let list, first;
  while(isCarryOver || l1 !== null || l2 !== null) {
    const sum = (l1?.val || 0) + (l2?.val || 0) + (isCarryOver ? 1: 0);
    isCarryOver = sum / 10 >= 1;
    if(list) {
      list.next = new ListNode(sum % 10, null)
      list = list.next;
    } else {
      list = new ListNode(sum % 10, null)
      first = list;
    }
    l1 = l1?.next || null;
    l2 = l2?.next || null;
  }
  return first;
};