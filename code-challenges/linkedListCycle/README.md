# Linked List Cycle

Given a linked list, determine if it has a cycle in it.

To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

Example 1:
```
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the second node.
```

Example 2:
```
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the first node.
```

Example 3:
```
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
```

- I solved this code challenge after reading about Floyd's Tortoise and Hare Algorithm. 
- Time Complexity: O(n); the run time depends on the n number of nodes. The more nodes there are, the longer it will take the "rabbit" to reach the end, or for it to "lap" the "turtle." 
- Space Complexity: O(1); because there are only two pointers. No additional space is created. 