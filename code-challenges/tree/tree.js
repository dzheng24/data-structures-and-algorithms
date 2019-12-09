'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  preOrder() {
    let results = [];
    let _walk = (node) => {
      results.push(node.value);
      if (node.left) {
        _walk(node.left);
      }
      if (node.right) {
        _walk(node.right);
      }
    }
    _walk(this.root);
    return results;
  }

  inOrder() {
    let results = [];
    let _walk = (node) => {
      if (node.left) {
        _walk(node.left);
      }
      results.push(node.value);
      if (node.right) {
        _walk(node.right);
      }
    }
    _walk(this.root);
    return results;
  }

  postOrder() {
    let results = [];
    let _walk = (node) => {
      if (node.left) {
        _walk(node.left);
      }
      if (node.right) {
        _walk(node.right);
      }
      results.push(node.value);
    }
    _walk(this.root);
    return results;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(value){
    if(this.root === null) {
      this.root = new Node(value);
      return;
    }
    this._addForNode(value, this.root);
  }

  _addForNode(value, parentNode) {
    if(value >= parentNode.value){
      if(parentNode.right === null) {
        parentNode.right = new Node(value);
        return;
      } else {
        this._addForNode(value, parentNode.right);
        // return;
      }
    }
    if(value < parentNode.value){
      if(parentNode.left === null) {
        parentNode.left = new Node(value);
        return;
      } else {
        this._addForNode(value, parentNode.left);
        // return;
      }
    }
  }

  contains(value) {
    return this._checkForNode(value, this.root);
  }

  _checkForNode(value, parentNode) {
    if (parentNode === null) {
      return false;
    }
    if (parentNode.value === value) {
      return true;
    } else if (value > parentNode.value) {
      return this._checkForNode(value, parentNode.right);
    } else if (value < parentNode.value) {
      return this._checkForNode(value, parentNode.left);
    }
  }
}

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
let eight = new Node(8);
let nine = new Node(9);

one.left = two;
one.right = three;
three.left = four;
three.right = five;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;


// console.log(tree.preOrder());
// console.log(tree.inOrder());
// console.log(tree.postOrder());

// let tree = new BinarySearchTree();
// tree.add(10);
// tree.add(5);
// tree.add(4);
// tree.add(1);
// tree.add(15);
// tree.add(20);
// tree.add(25);
// console.log(tree);
// console.log(tree.contains(25));

module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree,
}


