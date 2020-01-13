'use strict';

const ListNode = require('../merge-two').ListNode;
const mergeTwoLists = require('../merge-two').mergeTwoLists;


describe('testing the merge two lists function', () => {
  it('can merge two lists', () => {
    let list1 = new ListNode(1);
    list1.next = new ListNode(3);
    list1.next.next = new ListNode(5);
    let list2 = new ListNode(2);
    list2.next = new ListNode(4);
    list2.next.next = new ListNode(6);
    let result = mergeTwoLists(list1, list2);
    expect(result.val).toEqual(1);
    expect(result.next.val).toEqual(2);
    expect(result.next.next.val).toEqual(3);
    expect(result.next.next.next.val).toEqual(4);
    expect(result.next.next.next.next.val).toEqual(5);
    expect(result.next.next.next.next.next.val).toEqual(6);
  })
})
