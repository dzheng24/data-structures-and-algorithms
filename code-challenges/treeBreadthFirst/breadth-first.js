'use strict';


class Node {
  constructor(value) {
    this.left = null;
    this.next = null;
    this.right = null;
    this.value = value;
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
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  breadthFirst() {
    const queue = new Queue();
    queue.enqueue(this.root);
    const resultArray = [];

    while (queue.peek() !== null) {
      const current = queue.dequeue();
      resultArray.push(current.value);
      if (current.left !== null) {
        queue.enqueue(current.left);
      }
      if (current.right !== null) {
        queue.enqueue(current.right);
      }
    }
    return resultArray;
  }
}


let one = new Node(1);
let three = new Node(3);
let six = new Node(6);
let seven = new Node(7);

one.right = three;
three.left = six;
three.right = seven;

const tree = new BinaryTree(one);



console.log(tree.breadthFirst());

module.exports = {
  Node,
  Queue,
  BinaryTree
}
