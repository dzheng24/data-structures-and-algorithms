'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(root = null){
    this.root = root;
  }

  preOrder (){
    const nodes = [];
    const _walk = (node) => {
      nodes.push(node.value);
      if(node.left) _walk(node.left);
      if(node.right) _walk(node.right);
    };
    _walk(this.root);
    return nodes;
  }

  inOrder (){
    const nodes = [];
    const _walk = (node) => {
      if(node.left) _walk(node.left);
      node.push(node.value);
      if(node.right) _walk(node.right);
    }
    _walk(this.root);
    return nodes;
  }
}

function fizzBuzzTree(tree) {
  if (tree.root === null) {
    return 'there is no tree'
  }
  const traversal = (node) => {
    if (node.value % 15 === 0) {
      node.value = 'FizzBuzz';
    } else {
      node.value = `${node.value}`;
    }
    if (node.value % 3 === 0) {
      node.value = 'Fizz';
    }
    if (node.value % 5 === 0) {
      node.value = 'Buzz';
    }
    if (node.left) {
      traversal(node.left);
    }
    if (node.right) {
      traversal(node.right);
    }
  }

  traversal(tree.root);
  return newTree;
}

let one = new Node(150);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(15);
let seven = new Node(44);
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

const newTree = new BinaryTree(one);

// console.log(JSON.stringify(newTree));
fizzBuzzTree(newTree);
// console.log(JSON.stringify(fizzBuzzTree(newTree)));
console.log(newTree.root.left.left.right)
console.log(newTree.root.value);

module.exports = {
  Node,
  BinaryTree,
  fizzBuzzTree,
}
