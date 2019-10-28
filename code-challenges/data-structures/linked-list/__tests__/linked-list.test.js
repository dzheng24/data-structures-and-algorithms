'use strict';

// let Node = require('../linked-list').Node;
let LinkedList = require('../linked-list').LinkedList;

describe('linked-list tests', () => {
  it('can successfully instantiate an empty linked list', () => {
    let linkedList = new LinkedList();
    expect(linkedList.head).toBeNull();
    expect(linkedList instanceof LinkedList).toBeTruthy();
  });

  it('can properly insert into the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.insert(6);
    expect(linkedList.head.value).toEqual(6);
  });

  it('the head property will point to the first node in the list', () => {
    let linkedList = new LinkedList();
    linkedList.insert(6);
    linkedList.insert(7);
    expect(linkedList.head.value).toEqual(7);
  });

  it('can insert multiple nodes into the list', () => {
    let linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    expect(linkedList.head.value).toEqual(3);
    expect(linkedList.head.next.value).toEqual(2);
    expect(linkedList.head.next.next.value).toEqual(1);
  });

  it('will return true when finding a value within the linked list that exists', () => {
    let linkedList = new LinkedList();
    linkedList.insert(6);
    linkedList.insert(7);
    linkedList.insert(8);
    expect(linkedList.includes(6)).toBeTruthy();
    expect(linkedList.includes(7)).toBeTruthy();
    expect(linkedList.includes(8)).toBeTruthy();
  });

  it('will return false when finding a value within the linked list that does not exist', () => {
    let linkedList = new LinkedList();
    linkedList.insert(6);
    linkedList.insert(7);
    linkedList.insert(8);
    expect(linkedList.includes(1)).toBeFalsy();
  });

  it('can return a collection of all the values that exist in the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.insert(6);
    linkedList.insert(7);
    expect(linkedList.toString()).toEqual('7,6');
  });
})
