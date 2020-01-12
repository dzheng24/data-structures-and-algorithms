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

}

let list1 = new ListNode(1);
list1.next = new ListNode(3);
list1.next.next = new ListNode(5);

console.log(list1);

module.exports = {
  ListNode,
  mergeTwoLists
}

