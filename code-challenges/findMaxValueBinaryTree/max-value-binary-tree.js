'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(root) {
    this.root = root;
  }

  findMaxValue() {
    let maxValue = this.root.value;

    let _walk = (node) => {
      if (node.left) {
        _walk (node.left);
      }
      if (node.right) {
        _walk (node.right);
      }
      if (node.value > maxValue) {
        maxValue = node.value;
      }
    }

    _walk(this.root);
    return maxValue;
  }
}

// making a tree
let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
let eight = new Node(8);
let nine = new Node(99);

one.left = two;
one.right = three;
three.left = four;
three.right = five;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;

let tree = new BinaryTree(one);

module.exports = {
  Node,
  BinaryTree
}

console.log(JSON.stringify(tree));
console.log(tree.findMaxValue());

