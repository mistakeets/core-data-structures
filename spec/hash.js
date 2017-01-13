import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import HashTable from '../src/hash'

chai.use(chaiChange)

describe.only('HashTable', () => {
  'use strict'

  it('exists', () => {
    expect(HashTable).to.be.a('function')
  })

  describe('hash()', () => {
    it('generates a hash for the key "foo"', () => {
      const aHashTable = new HashTable()

      expect(aHashTable.hash('foo'))
        .to.equal('101574')
    })

    it('generates a hash for the number 753', () => {
      const aHashTable = new HashTable()

      expect(aHashTable.hash(753))
        .to.equal('54549')
    })
  })

  describe('put()', () => {
    it('increments table size when adding a key-value pair.', () => {
      const aHashTable = new HashTable()

      expect(() => aHashTable.put('foo', 'bar'))
        .to.alter(() => aHashTable.size(), { from: 0, to: 1 })
    })

    it('adds a key-value pair to the hash table.', () => {
      const aHashTable = new HashTable()
      aHashTable.put('foo', 'bar')

      expect(aHashTable.data[101574]['foo'])
        .to.equal('bar')
    })
  })

  describe('get()', () => {
    it('returns the data associated with a key.', () => {
      const aHashTable = new HashTable()
      aHashTable.put('foo', 'bar')

      expect(aHashTable.get('foo'))
        .to.equal('bar')
    })
  })

  describe('contains()', () => {
    it('returns true if the hash table contains the key.', () => {
      const aHashTable = new HashTable()
      aHashTable.put('foo', 'bar')

      expect(aHashTable.contains('foo'))
        .to.equal(true)
    })
    it('returns false if the hash table does not contains the key.', () => {
      const aHashTable = new HashTable()
      aHashTable.put('foo', 'bar')

      expect(aHashTable.contains('something else'))
        .to.equal(false)
    })
  })

  describe('iterate()', () => {
    it('takes a callback function and passes it each key and value in sequence.', () => {
      const aHashTable = new HashTable()
      aHashTable.put('foo', 'bar')
      aHashTable.put('lol', 'butts')

      const testArray = []
      const pushToTestArray = (key, value) => {
        let result = {}
        result[key] = value
        testArray.push(result)
      }

      aHashTable.iterate(pushToTestArray)

      expect(testArray[0].foo)
        .to.equal('bar')
      expect(testArray[1].lol)
        .to.equal('butts')
    })
  })

  describe('remove()', () => {
    it('removes a key-value pair by key.', () => {
      const aHashTable = new HashTable()
      aHashTable.put('foo', 'bar')

      expect(aHashTable.size()).to.equal(1)
      expect(() => aHashTable.remove('foo'))
        .to.alter(() => aHashTable.size(), { from: 1, to: 0 })
      expect(aHashTable.get('foo')).to.equal(undefined)
    })
  })

  describe('size()', () => {
    it('returns the number of key-value pairs in the hash table.', () => {
      const aHashTable = new HashTable()

      expect(() => aHashTable.put('foo', 'bar'))
        .to.alter(() => aHashTable.size(), { from: 0, to: 1 })
      expect(() => aHashTable.put('lol', 'butts'))
        .to.alter(() => aHashTable.size(), { from: 1, to: 2})
    })
  })

})
