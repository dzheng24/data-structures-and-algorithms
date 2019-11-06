'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(){
    this.root = null;
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


