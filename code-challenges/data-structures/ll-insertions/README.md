# Linked List Insertions


## Challenge
Write 3 methods for the Linked List class: 
  - `.append(value)` which adds a new node with the given `value` to the end of the list.
  - `.insertBefore(value,newVal)` which adds a new node with the given `newValue` immediately before the first `value` node.
  - `.insertAfter(value,newVal)` which adds a new node with the given `newValue` immediately after the first `value` node.

## Approach & Efficiency
 - For `.append`, time complexity is O(n), because the time depends on n number of nodes in the linked list; space complexity is O(1), because no additional space are being used. 
 - For `.insertBefore`, time complexity is O(n), because the time depends on n number of nodes the method has to traverse in order to insert the node; space complexity is O(1), because no additional spaces are being used.
 - For `.insertAfter`, time complexity is O(n), because the time depends on n number of nodes the method has to traverse in order to insert the node; time complexity is O(1), because no additional spaces are being used. 

## Solution
![whiteboard-image](ll-insertions.JPG)
