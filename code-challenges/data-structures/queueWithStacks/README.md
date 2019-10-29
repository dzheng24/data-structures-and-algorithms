# Queue with Two Stacks 

## Challenge 
- write a method called `enqueue(value)` which inserts value into the PseudoQueue, using a first-in, first-out approach.
- write a method called `dequeue()` which extracts a value from the PseudoQueue, using a first-in, first-out approach.

## Approach & Efficiency
For both of these methods, I created two separate array-like stacks inside the constructor; and pushing elements from stack 1 to 2, which reverses the order, then pop from stack 2. 