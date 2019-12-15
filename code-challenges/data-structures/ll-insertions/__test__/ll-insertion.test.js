'use strict';

const LinkedList = require('../ll-insertion').LinkedList;

describe('testing different insertion methods for a linked list', () => {
  it('can append value to the end of a list', () => {
    let ll = new LinkedList ();
    ll.append(4);
    ll.append(1);
    expect(ll.head.value).toEqual(4);
    expect(ll.head.next.value).toEqual(1);
  })

  it('can insert a new value before a node', () => {
    let ll = new LinkedList ();
    ll.append(1);
    ll.append(3);
    ll.append(3);
    ll.append(4);
    ll.insertBefore(1,6);
    ll.insertBefore(3,22);
    expect(ll.head.value).toEqual(6);
    expect(ll.head.next.next.value).toEqual(22);
    expect(ll.insertBefore(69,69)).toEqual('value not found');
  })

  it('can insert a new value after a node', () => {
    let ll = new LinkedList ();
    ll.append(4);
    ll.append(2);
    ll.append(2);
    ll.append(3);
    ll.insertAfter(4,44);
    expect(ll.head.next.value).toEqual(44);
    ll.insertAfter(2,55);
    expect(ll.head.next.next.next.value).toEqual(55);
    ll.insertAfter(3,77);
    expect(ll.head.next.next.next.next.next.next.value).toEqual(77);
    expect(ll.insertAfter(999,2)).toEqual('value not found');
  })
})
