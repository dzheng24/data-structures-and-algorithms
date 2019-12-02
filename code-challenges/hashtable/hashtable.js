'use strict';

const LinkedList = require('../data-structures/linked-list/linked-list').LinkedList

class Hashtable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    return key.toString().length % this.size;
  }

  add(key, value) {
    let index = this.hash(key);
    let list = this.buckets[index] || new LinkedList();
    this.buckets[index] = list;

    list.append({key:key, value:value});
  }

  get(key) {
    let index = this.hash(key);
    let list = this.buckets[index];
    if (!list) {
      return null;
    }

    let current = list.head;

    let valueArray = [];
    while (current) {
      let value = current.value.value;
      valueArray.push(value);
      current = current.next;
    }
    return valueArray;
  }

  contains(key) {
    let index = this.hash(key);
    let list = this.buckets[index];

    let current = list.head;
    while(current){
      // eslint-disable-next-line no-prototype-builtins
      if(current.value.key === key){
        return true;
      }
      current = current.next;
    }
    return false;
  }
}


let newThang = new Hashtable(4);
newThang.add('beast','1992 camaro');
newThang.add('beast','1987 iroc-z');
newThang.add('qb','russell wilson');
newThang.add('qb','matt stafford');

console.log(newThang.contains('rb'));

module.exports = Hashtable;

//source: https://reactgo.com/hashtable-javascript/
