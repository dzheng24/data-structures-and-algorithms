'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}

function hasCycle(list) {
  let turtle = list;
  let rabbit = list;
  while (rabbit && rabbit.next) {
    turtle = turtle.next;
    rabbit = rabbit.next.next;
    if (turtle === rabbit) {
      return true
    }
  }
  return false;
}


let newList = new Node(4);
newList.next = new Node(4);
newList.next.next = new Node(4);
newList.next.next.next = new Node(4);
newList.next.next.next.next = new Node(4);
newList.next.next.next.next.next = new Node(4);

let secondList = new Node(4);
secondList.next = new Node(4);
secondList.next.next = new Node(4);
let loopingNode = new Node (5);
secondList.next.next.next = loopingNode;
loopingNode.next = secondList.next.next;

module.exports = {
  Node,
  hasCycle
}


console.log(hasCycle(newList));
console.log(hasCycle(secondList));


