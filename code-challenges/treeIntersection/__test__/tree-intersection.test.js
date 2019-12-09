'use strict';

const treeIntersection = require('../tree-intersection.js').treeIntersection
const Node = require('../tree-intersection.js').Node
const BinaryTree = require('../../tree/tree.js').BinaryTree;

describe('tests for treeIntersection', () => {
  it('can find common values that are numbers', () => {
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

    let a = new Node (1);
    let b = new Node (2);
    let c = new Node (99);

    a.left = b;
    a.right = c;

    let tree1 = new BinaryTree(one);
    let tree2 = new BinaryTree(a);
    expect(treeIntersection(tree1, tree2)).toEqual([2,1]);
  })

  it('can find common values that are numbers and strings', () => {
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

    let a = new Node (2);
    let b = new Node (88);
    let c = new Node ('hello');

    a.left = b;
    a.right = c;

    let tree1 = new BinaryTree(one);
    let tree2 = new BinaryTree(a);
    expect(treeIntersection(tree1, tree2)).toEqual([2, 'hello']);
  })
})
