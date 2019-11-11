# Trees
- Establish node, binary tree, and binary search tree class

## Challenge 10
- Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
- Create a BinaryTree class: no specific sorting order 
- Create a BinarySearchTree class: specific sorting order 

 
## Approach & Efficiency
  - For Binary Tree, the Big O time of search will be O(n), because we may have to search for the whole tree. Space complexity is Big O (h), where h is the height of the tree. 
  - For Binary Search Tree, the time complexity is O(log n); space complexity would be O(1). 

## API
- Binary Tree Methods:
  - preOrder(): checks for the root first, then its left child, and right child
  - inOrder(): checks for the left child first, then root, and the right child
  - postOrder(): checks for the left child, right child, then the root

- Binary Search Tree Methods:
  - Define a method named `add` that accepts a value, and adds a new node with that value in the correct location in the binary search tree.
  - Define a method named `contains` that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.
