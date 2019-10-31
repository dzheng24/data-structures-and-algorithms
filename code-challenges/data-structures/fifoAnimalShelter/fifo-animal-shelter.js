'use strict';


class AnimalShelter {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(animal) {
    if (animal.type === 'dog')
      this.stack1.push(animal);
    if (animal.type === 'cat')
      this.stack1.push(animal);
  }

  dequeue(pref) {
    if (this.stack2.length === 0) {
      if (this.stack1.length === 0) {
        return 'empty shelter';
      }
      while (this.stack1.length > 0) {
        let poppedAnimal = this.stack1.pop();
        this.stack2.push(poppedAnimal);
      }
      // console.log('stack 2 :', this.stack2.length);
      for (let i = 0; i < this.stack2.length; i++) {
        if (this.stack2[i].type === pref) {
          console.log('got it');
        }
      }
    }
  }
}




const peanut = {
  type: 'dog',
}
const jenny = {
  type: 'cat',
}


const shelter = new AnimalShelter();

shelter.enqueue(peanut);
shelter.enqueue(jenny);
// shelter.dequeue('dog');
// console.log(shelter.stack1);
shelter.dequeue('cat');
// console.log(shelter.stack2);
// console.log(shelter.dequeue('dog'));


