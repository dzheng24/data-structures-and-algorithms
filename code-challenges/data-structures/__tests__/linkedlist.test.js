'use strict';

let LinkedList = require('../ll-merge/ll-merge').linkedList;
let Node = require('../ll-merge/ll-merge').node;

const linkedlist3 = new LinkedList();
const linkedlist4 = new LinkedList();
linkedlist3.head = new Node(2);
linkedlist3.head.next = new Node(3);
linkedlist3.head.next.next = new Node(4);
linkedlist3.head.next.next.next = new Node(5);
linkedlist4.head = new Node(6);
linkedlist4.head.next = new Node(7);
linkedlist4.head.next.next = new Node(8);
linkedlist4.head.next.next.next = new Node(9);

//////// TESTS /////////

