# Hashtables
Hashtables are an important data strucuture to find and store information. 

## Challenge
Implement a Hashtable class with 4 different methods.
  - hash(key)
  - add(key, value)
  - get(key)
  - contains(key)

## Approach and Efficiency
  - hash(key); a formula that that turns the key into an index number between 0 and the length of the array; O(1) for time and spcae.
  - add(key, value); once the key is hashed, it gets placed into a linked list at that specific index to avoid collision. O(1) for both time and space.
  - find(key); given the key, this method searches for that key's in the specific index number. O(1) for both time and space. 
  - contains(key); very similar to find function, this method returns a boolean value if the key exists. O(1) for both time and space. 

## API 
  - hash(key): hashes a key, and returns an index
  - add(key, value): adds a key/value pair to the hashtable as a linked list
  - find(key): returns the key's value if it exists in the hashtable
  - contains(key): returns a boolean value whether or not the key exists in the hashtable