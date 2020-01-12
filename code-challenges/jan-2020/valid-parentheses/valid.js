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
      return true;
    }
    else {
      return false;
    }
  }
}

function isValid(string) {
  let stack = new Stack();
  for (let i = 0; i < string.length; i ++) {
    if (string[i] === '(' || string[i] === '[' || string[i] === '{') {
      stack.push(string[i]);
    }
    else if (string[i] === ')' && stack.peek() === '(') {
      stack.pop();
    }
    else if (string[i] === ']' && stack.peek() === '[') {
      stack.pop();
    }
    else if (string[i] === '}' && stack.peek() === '{') {
      stack.pop();
    }
    else {
      return false;
    }
  }
  return stack.isEmpty();
}

module.exports = {
  Node,
  Stack,
  isValid
}
