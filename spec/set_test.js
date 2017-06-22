import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import set from '../src/set'

chai.use(chaiChange)

describe('set', () => {
  'use strict'

  it('exists', () => {
    expect(set).to.be.a('function')
  })

  context('isEmpty()', () => {
    it('shows the current set is empty.', () => {
      const aSet = new set()
      expect(aSet.isEmpty())
        .to.equal(true)
    })
    it('returns false if the current set is occupied.', () => {
      const aSet = new set()
      aSet.add('stuff', null)
      aSet.add('morestuff', null)
      expect(aSet.isEmpty())
        .to.equal(false)
    })
  })

  context('contains()', () => {
    it('shows the current set contains the specified element.', () => {
      const aSet = new set()
      aSet.add('A', null)
      aSet.add('b', null)
      aSet.add('c', null)
      expect(aSet.contains('b'))
        .to.equal(true)
    })
    it('returns false if the current element is not there.', () => {
      const aSet = new set()
      aSet.add('A', null)
      aSet.add('b', null)
      aSet.add('c', null)
      expect(aSet.contains(' fergendurgen '))
        .to.equal(false)
    })
  })

  context('size()', () => {
    it('shows the current sets size.', () => {
      const aSet = new set()
      aSet.add('A', null)
      aSet.add('b', null)
      aSet.add('c', null)
      expect(aSet.size())
        .to.equal(3)
    })
  })

  context('add()', () => {
    it('Adds an element to the front of the current set.', () => {
      const aSet = new set()
      aSet.add('hi')
      expect(aSet.top)
        .to.equal(1)
    })
    it('Returns an error if the element is not unique.', () => {
      const aSet = new set()
      aSet.add('morestuff')
      aSet.add('something else')
      aSet.add('stuff')
      expect(aSet.add('stuff'))
        .to.equal(false)

    })
  })

  context('remove()', () => {
    it('removes the specified element from the set.', () => {
      const aSet = new set()
      aSet.add('junk')
      aSet.add('things')
      aSet.add('stuff')
      expect(aSet.contains('stuff'))
        .to.equal(true)

      aSet.remove('stuff')

      expect(aSet.contains('stuff'))
        .to.equal(false)
    })
    it('decreases the length of the set when an element is removed.', () => {
      const aSet = new set()
      aSet.add('junk')
      aSet.add('things')
      aSet.add('stuff')
      expect(() => aSet.remove('stuff'))
        .to.alter(() => aSet.top, { from: 3, to: 2 })
    })
  })

  context('foreach', () => {
    it('takes a callback function and passes it each element in sequence', () => {
      let addOne = (element) => {
        return element + 1
      }

      const aSet = new set()
      aSet.add(1)
      aSet.add(2)
      aSet.add(3)


      const results = aSet.forEach(addOne)
      expect(results)
        .to.deep.equal([2, 3, 4])
    })
  })

  context('difference()', () => {
    it(' compares two sets and returns the unique values from the first set.', () => {
      const aSet = new set([1, 2, 3])
      const bSet = new set([2, 3, 4])
      const results = aSet.difference(aSet, bSet)

      expect(results)
        .to.deep.equal([1])
    })
  })

  context('union()', () => {
    it('Joins two sets together without duplication.', () => {
      const aSet = new set([1, 2, 3])
      const bSet = new set([2, 3, 4])
      const results = aSet.union(bSet)

      expect(aSet.union(bSet).members())
        .to.deep.equal([1, 2, 3, 4])
    })
  })



  context('subset()', () => {
    it('returns true if the set is a subset of otherSet ', () => {
      const aSet = new set()
      const bSet = new set()

      aSet.add('A', null)
      aSet.add('b', null)
      aSet.add('c', null)

      bSet.add('b', null)
      bSet.add('c', null)
      expect(bSet.subset(aSet))
        .to.equal(true)
    })
    it('returns false if the set is not a subset of otherSet.', () => {
      const aSet = new set()
      const bSet = new set()

      bSet.add('qq', null)

      aSet.add('A', null)
      aSet.add('b', null)
      aSet.add('c', null)
      expect(bSet.subset(aSet))
        .to.equal(false)
    })
  })

  context('intersection()', () => {
    it(' compares two sets and returns the values that are the same from the  sets.', () => {
      const aSet = new set([1, 2, 3])
      const bSet = new set([2, 3, 4])
      const results = aSet.intersection(aSet, bSet)

      expect(results)
        .to.deep.equal([2, 3])
    })
  })

  context('clone()', () => {
    it('returns a cloned set.', () => {
      const aSet = new set([1, 2, 3])
      const clonedSet = aSet.clone()

      expect(clonedSet.elements)
        .to.deep.equal([1, 2, 3])
    })
  })

})
