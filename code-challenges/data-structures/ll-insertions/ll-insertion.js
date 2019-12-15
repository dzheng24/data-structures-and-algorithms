'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(value) {
    let newNode = new Node (value);
    if (this.head === null) {
      this.head = newNode;
      return this;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
    return this;
  }

  insertBefore(value, newVal) {
    let newNode = new Node (newVal);
    let existingNode = new Node (value);
    let current = this.head;
    if (current.value === existingNode.value) {
      this.head = newNode;
      newNode.next = current;
      return this;
    }
    while (current.next !== null) {
      if (current.next.value === existingNode.value) {
        newNode.next = existingNode;
        current.next = newNode;
        return this;
      }
      current = current.next;
    }
    return 'value not found';
  }

  insertAfter(value, newVal) {
    let newNode = new Node (newVal);
    let current = this.head;
    let nextNode = this.head.next;
    while (current.next !== null) {
      if (current.value === value) {
        current.next = newNode;
        newNode.next = nextNode;
        return this;
      }
      current = current.next;
      nextNode = nextNode.next;
    }
    if (current.value === value) {
      current.next = newNode;
      return this;
    }
    return 'value not found';
  }
}

const ll = new LinkedList();

// ll.head = new Node(1);

// console.log(ll);
ll.append(4);
ll.append(1);
ll.append(2);
ll.append(2);
ll.append(3);
ll.insertAfter(88,69);
console.log(JSON.stringify(ll));
console.log(ll.insertAfter(88,69));

module.exports = {
  Node,
  LinkedList
}
