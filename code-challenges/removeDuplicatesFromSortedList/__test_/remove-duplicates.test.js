'use strict';

const Node = require('../remove-duplicates').Node;
const deleteDuplicates = require('../remove-duplicates').deleteDuplicates;

describe('testing remove-duplicates function', () => {
  it ('can properly remove duplicated values from a sorted linked list', () => {
    let linkedList = new Node (4);
    linkedList.next = new Node (4);
    linkedList.next.next = new Node (4);
    linkedList.next.next.next = new Node (6);
    linkedList.next.next.next.next = new Node (6);
    linkedList.next.next.next.next.next = new Node (7);
    deleteDuplicates(linkedList);
    expect(linkedList.value).toEqual(4);
    expect(linkedList.next.value).toEqual(6);
    expect(linkedList.next.next.value).toEqual(7);
  })
})
