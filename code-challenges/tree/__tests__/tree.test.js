'use strict';

const Node = require('../tree').Node;
const BinaryTree = require('../tree').BinaryTree;
const BinarySearchTree = require('../tree').BinarySearchTree;

describe('tree tests', () => {
  it('can instantiate an empty tree', () => {
    let tree1 = new BinaryTree();
    let tree2 = new BinarySearchTree();
    expect(tree1 instanceof BinaryTree).toBeTruthy;
    expect(tree2 instanceof BinarySearchTree).toBeTruthy;
  })

  it('can instantiate a tree with a single root value', () => {
    let one = new Node(1);
    let tree = new BinaryTree(one);
    expect(tree.root.value).toEqual(1);
  })

  it('can add a left and right child to a single root node', () => {
    let tree = new BinarySearchTree();
    tree.add(10);
    tree.add(5);
    tree.add(15);
    expect(tree.root.value).toBe(10);
    expect(tree.root.left.value).toBe(5);
    expect(tree.root.right.value).toBe(15);
  })

  it('can return a collection from a preorder traversal', () => {
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

    let tree = new BinaryTree(one);
    expect(tree.preOrder()).toEqual([1,2,6,7,8,9,3,4,5]);
  })

  it('can return a collection from a inorder traversal', () => {
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

    let tree = new BinaryTree(one);
    expect(tree.inOrder()).toEqual([6,8,7,9,2,1,4,3,5]);
  })

  it('can return a collection from a postorder traversal', () => {
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

    let tree = new BinaryTree(one);
    expect(tree.postOrder()).toEqual([8,9,7,6,2,4,5,3,1]);
  })
})


