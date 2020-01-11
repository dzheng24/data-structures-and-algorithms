'use strict';

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function findTarget(root, k) {
  let stack = [root];
  // console.log('stack is ' + JSON.stringify(stack));
  let set = new Set();
  while (stack.length) {
    console.log('the length of stack is ' + stack.length)
    let node = stack.pop();
    console.log('the node value is ' + node.val)
    if (set.has(k - node.val)) {
      return true;
    }
    set.add(node.val);
    console.log('the set right now is ' + set.values())
    if (node.left) {
      stack.push(node.left);
    }
    if (node.right) {
      stack.push(node.right);
    }
  }
  return false;
}

const five = new TreeNode(5);
const three = new TreeNode(3);
const six = new TreeNode(6);
const two = new TreeNode(2);
const four = new TreeNode(4);
const seven = new TreeNode(7);

five.left = three;
five.right = six;
three.left = two;
three.right = four;
six.right = seven;


console.log(findTarget(five, 9));

module.exports = { 
  TreeNode,
  findTarget
}
