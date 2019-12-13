'use strict';

const Node = require('../fizz-buzz-tree').Node;
const BinaryTree = require('../fizz-buzz-tree').BinaryTree;
const fizzBuzzTree = require('../fizz-buzz-tree').fizzBuzzTree;

describe ('testing the fizz buzz tree', () => {
  it (`can turn numbers divisible by 3 to string 'Fizz'`, () => {
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
    fizzBuzzTree(newTree);
    expect(newTree.root.right.value).toEqual('Fizz');
    expect(newTree.root.left.left.right.right.value).toEqual('Fizz');
  })

  it (`can turn numbers divisible by 5 to string 'Buzz'`, () => {
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
    fizzBuzzTree(newTree);
    expect(newTree.root.right.right.value).toEqual('Buzz');
  })

  it (`can turn numbers to 'FizzBuzz' if it is both divisible by 3 and 5`, () => {
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
    fizzBuzzTree(newTree);
    expect(newTree.root.value).toEqual('FizzBuzz');
    expect(newTree.root.left.left.value).toEqual('FizzBuzz');
  })

  it('can send back a message if there is no tree', () => {
    // const noRoot = new Node(0);
    const tree = new BinaryTree(null);
    expect(fizzBuzzTree(tree)).toEqual('there is no tree');
  })
})
