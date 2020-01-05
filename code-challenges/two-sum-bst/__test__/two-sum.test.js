'use strict';

const TreeNode = require('../two-sum').TreeNode;
const findTarget = require('../two-sum').findTarget;

describe('testing two sum with a BST', () => {
  it('can return true if the number adds up', () => {
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

    expect(findTarget(five, 9)).toEqual(true);
    expect(findTarget(five, 13)).toEqual(true);
  })

  it('can return false if the number does not add up', () => {
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

    expect(findTarget(five, 99)).toEqual(false);
    expect(findTarget(five, 98)).toEqual(false);
  })
})
