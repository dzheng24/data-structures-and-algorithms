'use strict';

const Hashtable = require('../hashtable/hashtable.js')
const BinaryTree = require('../tree/tree.js').BinaryTree

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function treeIntersection (tree1, tree2) {
  let result = [];
  let table = new Hashtable();

  const traverse = (node) => {
    if (node.left) {
      traverse(node.left)
    }
    table.add(node.value, true);
    if (node.right) {
      traverse(node.right);
    }
  }

  traverse(tree1.root);

  const traverseTwo = (node) => {
    if (node.left) {
      traverseTwo(node.left)
    }
    if (table.contains(node.value)){
      result.push(node.value)
    }
    if (node.right) {
      traverseTwo(node.right)
    }
  }

  traverseTwo(tree2.root);
  return result;
}


let one = new Node('hello');
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

let a = new Node ('hello');
let b = new Node (2);
let c = new Node (99);

a.left = b;
a.right = c;

let tree1 = new BinaryTree(one);
let tree2 = new BinaryTree(a);

console.log('result is ' + treeIntersection(tree1, tree2));

module.exports = {
  treeIntersection,
  Node
}

