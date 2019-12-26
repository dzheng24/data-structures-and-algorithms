'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function deleteDuplicates (head) {
  let current = head;
  while (current.next !== null) {
    if (current.value !== current.next.value) {
      current = current.next
    } else {
      current.next = current.next.next;
    }
  }
  return head;
}

let linkedList = new Node (4);
linkedList.next = new Node (4);
linkedList.next.next = new Node (4);
linkedList.next.next.next = new Node (6);
linkedList.next.next.next.next = new Node (7);

module.exports = {
  deleteDuplicates,
  Node
}

