'use strict';

const Hashtable = require('../hashtable');

describe('testing Hashtable', () => {
  it('can successfully hash a key to an in-range value', () => {
    let newThing = new Hashtable(4);
    expect(newThing.hash('car')).toEqual(3);
    expect(newThing.hash('cars')).toEqual(0);
  });

  it('can add key/value to your hashtable results in the value being in the data structure', () => {
    let newThing = new Hashtable(4);
    newThing.add('beast', '1992 Camaro');
    expect(newThing.buckets[1].head.value.key).toEqual('beast');
    expect(newThing.buckets[1].head.value.value).toEqual('1992 Camaro');
  })

  it('can successfully handle a collision within the hashtable', () => {
    let newThing = new Hashtable(4);
    newThing.add('beast', '1992 Camaro');
    newThing.add('beast', '1987 iroc-z');
    expect(newThing.buckets[1].head.value).toEqual({key:'beast', value:'1992 Camaro'});
    expect(newThing.buckets[1].head.next.value).toEqual({key:'beast', value:'1987 iroc-z'});
  })

  it('can retrieve a stored value based on key input', () => {
    let newThing = new Hashtable(4);
    newThing.add('qb', 'russell wilson');
    newThing.add('beast', '1992 Camaro');
    expect(newThing.get('beast')).toEqual(['1992 Camaro']);
    expect(newThing.get('qb')).toEqual(['russell wilson']);
  })

  it('can return null for a key that does not exist in the hashtable', () => {
    let newThing = new Hashtable(4);
    newThing.add('qb', 'russell wilson');
    expect(newThing.get('rb')).toBeNull;
  })

  it('can retrieve a value from a bucket within the hashtable that has a collision', () => {
    let newThing = new Hashtable(4);
    newThing.add('qb','russell wilson');
    newThing.add('qb','matt stafford');
    expect(newThing.get('qb')).toEqual(['russell wilson','matt stafford'])

  })
})





