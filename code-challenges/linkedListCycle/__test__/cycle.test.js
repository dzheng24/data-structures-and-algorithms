'use strict';

const Node = require('../linked-list-cycle').Node;
const hasCycle = require('../linked-list-cycle').hasCycle;

describe('test whether or not if a linked list contains a cycle', () => {
  it('can return true if there is a cycle', () => {
    let secondList = new Node(4);
    secondList.next = new Node(4);
    secondList.next.next = new Node(4);
    let loopingNode = new Node (5);
    secondList.next.next.next = loopingNode;
    loopingNode.next = secondList.next.next;
    expect(hasCycle(secondList)).toEqual(true);
  });

  it('can return false if there is no cycle', () => {
    let newList = new Node(4);
    newList.next = new Node(4);
    newList.next.next = new Node(4);
    newList.next.next.next = new Node(4);
    newList.next.next.next.next = new Node(4);
    newList.next.next.next.next.next = new Node(4);
    expect(hasCycle(newList)).toEqual(false);
  })
})
