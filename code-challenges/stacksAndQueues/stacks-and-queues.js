'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    let poppedValue = this.top.value;
    this.top = this.top.next;
    return poppedValue;
  }

  peek() {
    if (!this.top) {
      return null;
    }
    return this.top.value;
  }

  isEmpty() {
    if (!this.top) {
      return false;
    }
    else {
      return true;
    }
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    let node = new Node(value);
    if (this.front) {
      this.back.next = node;
      this.back = node;
    }
    else {
      this.front = node;
      this.back = node;
    }
  }

  dequeue() {
    if (!this.front) {
      return null;
    }
    let dequeuedValue = this.front.value;
    this.front = this.front.next;
    return dequeuedValue;
  }

  peek() {
    if (!this.front) {
      return null;
    }
    return this.front.value;
  }

  isEmpty() {
    if (!this.front) {
      return false;
    }
    else {
      return true;
    }
  }
}

module.exports = {
  Node,
  Stack,
  Queue,
}





