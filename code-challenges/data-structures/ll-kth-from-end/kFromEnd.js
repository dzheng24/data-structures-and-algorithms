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
    this.length = 0;
  }

  append(value) {
    let node = new Node(value);
    let current;

    if (!this.head){
      this.head = node;
      this.length++;
      return;
    }

    current = this.head;

    while (current.next) {
      current = current.next;
    }
    current.next = node;
    this.length++;
  }

  insert(value, newValue) {
    const node = new Node(newValue);

    if (this.head.value === value) {
      node.next = this.head;
      this.head = node;
      this.length++;
      return;
    }

    let current = this.head;

    while (current.next) {
      if (current.next.value === value) {
        node.next = current.next;
        current.next = node;
        this.length++;
        return;
      }

      current = current.next;
    }
  }
}

const ll = new LinkedList();

ll.append(1);
ll.append(3);
ll.append(8);
ll.append(2);
ll.insert(8,66);
console.log(JSON.stringify(ll));
