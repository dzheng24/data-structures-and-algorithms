'use strict';

//source: https://coderbyte.com/algorithm/implement-queue-using-two-stacks

class PseudoQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }
  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
    if (this.stack2.length === 0) {
      if (this.stack1.length === 0) {
        return 'empty queue';
      }
      while (this.stack1.length > 0) {
        var poppedValue = this.stack1.pop();
        this.stack2.push(poppedValue);
      }
    }
    return this.stack2.pop();
  }
}

const queue = new PseudoQueue();

queue.enqueue(1);
queue.enqueue(3);
queue.enqueue(5);
queue.enqueue(7);
console.log(queue.stack1);
console.log(queue.dequeue());
console.log(queue.stack2);


module.exports = PseudoQueue;
