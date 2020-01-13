/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

function mergeTwoLists(l1, l2) {
  let test = new ListNode(-1);
  let newHead = test;
  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      test.next = l1;
      l1 = l1.next;
    }
    else {
      test.next = l2;
      l2 = l2.next;
    }
    test = test.next;
  }
  if (l1 !== null) {
    test.next = l1;
  }
  else {
    test.next = l2;
  }
  return newHead.next;
}

let list1 = new ListNode(1);
list1.next = new ListNode(3);
list1.next.next = new ListNode(5);

console.log(list1);

module.exports = {
  ListNode,
  mergeTwoLists
}

