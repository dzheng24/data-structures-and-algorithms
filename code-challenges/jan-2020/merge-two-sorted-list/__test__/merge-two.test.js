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
    mergeTwoLists(list1, list2);
    expect(list1.value).toEqual(1);
    expect(list1.next.value).toEqual(2);
    expect(list1.next.next.value).toEqual(3);
    expect(list1.next.next.next.value).toEqual(4);
    expect(list1.next.next.next.next.value).toEqual(5);
    expect(list1.next.next.next.next.next.value).toEqual(6);
  })
})
