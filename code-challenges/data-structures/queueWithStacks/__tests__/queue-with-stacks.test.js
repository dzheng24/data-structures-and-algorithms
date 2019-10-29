'use strict';

let PseudoQueue = require ('../queue-with-stacks');

describe('queue-with-stacks tests', () => {
  it('can successfully enqueue an element', () => {
    let queue = new PseudoQueue();
    queue.enqueue(2);
    expect(queue.stack1).toEqual([2]);
    queue.enqueue(3);
    expect(queue.stack1).toEqual([2,3]);
    queue.enqueue(4);
    expect(queue.stack1).toEqual([2,3,4]);
  });

  it('can successfully dequeue an element', () => {
    let queue = new PseudoQueue();
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    queue.enqueue(6);
    expect(queue.stack1).toEqual([2,3,4,5,6]);
    expect(queue.dequeue()).toEqual(2);
    expect(queue.stack2).toEqual([6,5,4,3]);
    expect(queue.dequeue()).toEqual(3);
    expect(queue.dequeue()).toEqual(4);
  });
});
