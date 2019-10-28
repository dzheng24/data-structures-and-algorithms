# Singly Linked List

## Challenge 
- Define a method called `insert` which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
- Define a method called `includes` which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
- Define a method called `toString` (or __str__ in Python) which takes in no arguments and returns a string representing all the values in the Linked List.

## Approach & Efficiency
- For `insert`, I made sure keep the new Node as the head by setting `this.head.next` as the head. 
- For `includes`, I traversed through to linked-list to compare each value to the value.
- for `toString`, I made an empty array first, and pushed each value into the array as I traversed through them.