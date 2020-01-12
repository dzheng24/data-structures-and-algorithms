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

function isValid(string) {

}

let seahawks = new Stack();
seahawks.push('russell');
seahawks.push('marshawn');
seahawks.push('dk');
console.log(JSON.stringify(seahawks));

module.exports = {
  Node,
  Stack,
  isValid
}
