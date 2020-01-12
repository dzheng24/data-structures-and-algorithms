# Valid Parentheses
https://leetcode.com/problems/valid-parentheses/

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

```
Example 1:

Input: "()"
Output: true

Example 2:

Input: "()[]{}"
Output: true

Example 3:

Input: "(]"
Output: false

Example 4:

Input: "([)]"
Output: false

Example 5:

Input: "{[]}"
Output: true
```

This video helped me to solve the problem by using a stack approach. Being able to "visualize" the problem helped me a lot. "Order matters in this one". 
https://www.youtube.com/watch?v=f8Jq8Ibg2Ys

Time Complexity: O(n)
Space Complexity: O(1)


