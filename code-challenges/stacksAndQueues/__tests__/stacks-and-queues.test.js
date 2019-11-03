'use strict';

let Stack = require('../stacks-and-queues').Stack;
let Queue = require('../stacks-and-queues').Queue;

describe('tests for stack', () => {
  it('can successfully push onto a stack', () => {
    let newStack = new Stack();
    newStack.push(2);
    expect(newStack.top.value).toEqual(2);
  })

  it('can successfully push multiple values onto a stack', () => {
    let newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    newStack.push(3);
    newStack.push(4);
    expect(newStack.top.value).toEqual(4);
    expect(newStack.top.next.value).toEqual(3);
    expect(newStack.top.next.next.value).toEqual(2);
    expect(newStack.top.next.next.next.value).toEqual(1);
  })

  it('can successfully pop off the stack', () => {
    let newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    newStack.push(3);
    newStack.pop();
    expect(newStack.top.value).toEqual(2);
  })

  it('can empty a stack after multiple pops', () => {
    let newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    newStack.push(3);
    newStack.pop();
    newStack.pop();
    newStack.pop();
    expect(newStack.isEmpty()).toBeFalsy;
  })

  it('can peek the next item on the stack', () => {
    let newStack = new Stack();
    newStack.push(1);
    newStack.push(10);
    expect(newStack.peek()).toEqual(10);
  })

  it('can successfully instantiate an empty stack', () => {
    let newStack = new Stack();
    expect(newStack instanceof Stack).toBeTruthy;
  })
})

describe('tests for queue', () => {
  it('can enqueue into a queue', () => {
    let queue = new Queue();
    queue.enqueue(2);
    expect(queue.back.value).toEqual(2);
  })

  it('can enqueue multiple values into a queue', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.front.value).toEqual(1);
    expect(queue.front.next.value).toEqual(2);
    expect(queue.back.value).toEqual(3);
  })

  it('can successfully dequeue out of a queue the expect value', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toEqual(1);
  })

  it('can peek into a queue, seeing the expected value', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.peek()).toEqual(1);
  })

  it('can empty a queue after multiple dequeues', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toBeFalsy();
  })

  it('can successfully instantiate an empty queue', () => {
    let queue = new Queue();
    expect(queue instanceof Queue).toBeTruthy;
  })
})
