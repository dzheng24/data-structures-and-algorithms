'use strict';


class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class Queue {
  constructor() {
    this.total = [];
  }
  dequeue() {
    return this.total.shift();
  }
  enqueue(value) {
    this.total.push(value);
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  breadthFirst(current) {
    const queue = new Queue();
    let results = [];
    queue.enqueue(current);

    while (queue.total.length > 0) {
      const current = queue.dequeue();
      results.push(current.value);
      if (current.left !== null) {
        queue.enqueue(current.left);
      }
      if (current.right !== null) {
        queue.enqueue(current.right);
      }
    }
    return results;
  }
}

const tree = new BinaryTree();

tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node (3);

console.log(tree.breadthFirst());
