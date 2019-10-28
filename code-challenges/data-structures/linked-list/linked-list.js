'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }
    let current = this.head;
    this.head = node;
    this.head.next = current;
    return this;
  }

  includes(value) {
    if (!this.head) {
      return false;
    }
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    if (!this.head) {
      return null;
    }
    let nodes = [];
    let current = this.head;
    while (current) {
      nodes.push(current.value);
      current = current.next;
    }
    return nodes.join();
  }
}

let linkedList = new LinkedList;
console.log(linkedList.insert(6));
console.log(linkedList.insert(7));
console.log(linkedList.includes(7));
console.log(linkedList.toString());

module.exports = {
  Node,
  LinkedList,
};




