'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    // this.length = 0;
  }

  append(value) {
    let node = new Node(value);
    let current;

    if (!this.head){
      this.head = node;
      // this.length++;
      return;
    }

    current = this.head;

    while (current.next) {
      current = current.next;
    }
    current.next = node;
    // this.length++;
  }

  merge(list1, list2) {
    let currentOne = list1.head;
    let currentTwo = list2.head;
    let holderOne = null;
    let holderTwo = null;

    while (currentOne !== null && currentTwo !== null) {
      holderOne = currentOne.next;
      currentOne.next = currentTwo;
      if (holderOne === null) {
        break;
      }else{
        holderTwo = currentTwo.next;
        currentTwo.next = holderOne;
      }
      currentOne = holderOne;
      currentTwo = holderTwo;
    }

    if (list1 === null) {
      return list2.head;
    } else {
      return list1.head;
    }
  }
}

const llOne = new LinkedList ();
const llTwo = new LinkedList ();
const mergedList = new LinkedList();

llOne.head = new Node(1);
llOne.head.next = new Node(3);
llOne.append(2);

llTwo.head = new Node(5);
llTwo.head.next = new Node(9);
// llTwo.head.next.next = new Node(4);

// mergedList.append(llOne,llTwo);

console.log('first linked list: ', JSON.stringify(llOne));
console.log('second linked list: ', JSON.stringify(llTwo));
console.log('merged list: ', JSON.stringify(mergedList.merge(llOne,llTwo)));

module.exports = {
  linkedList: LinkedList,
  node: Node,
}


