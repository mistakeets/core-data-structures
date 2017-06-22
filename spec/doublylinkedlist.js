import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import DoublyLinkedList from '../src/doublylinkedlist'

chai.use(chaiChange)

const generateTestList = () => {
  const list = new DoublyLinkedList()

  list.insert('first')
  list.insert('middle')
  list.insert('last')

  return list
}


describe('DoublyLinkedList', () => {
  'use strict'

  it('exists', () => {
    expect(DoublyLinkedList).to.be.a('function')
  })

  describe('insertFirst', () => {

    it('increments the size of the list when inserting', () => {
      const aDoublyLinkedList = new DoublyLinkedList()

      expect(() => aDoublyLinkedList.insertFirst('foo'))
        .to.alter(() => aDoublyLinkedList.size(), { from: 0, to: 1 })
    })

    it('Inserts a node with the provided data to the head of the list', () => {
      const aDoublyLinkedList = generateTestList()

      aDoublyLinkedList.insertFirst('bar')

      expect(() => aDoublyLinkedList.getHeadNode().data
        .to.equal('bar'))
      expect(() => aDoublyLinkedList.getHeadNode().prev
        .to.equal(null))
    })
  })

  describe('insert()', () => {
    it('increments the size when inserting a node', () => {
      const aDoublyLinkedList = generateTestList()

      expect(() => aDoublyLinkedList.insert('junk'))
        .to.alter(() => aDoublyLinkedList.size(), { from: 3, to: 4 })

    })

    it('Inserts a node (with the provided data) to the tail of the list', () => {
      const aDoublyLinkedList = generateTestList()

      const oldTail = aDoublyLinkedList.getTailNode()

      aDoublyLinkedList.insert('junk')

      expect(aDoublyLinkedList.tail.data)
        .to.equal('junk')

      expect(aDoublyLinkedList.tail.prev)
        .to.equal(oldTail)

      expect(oldTail.next.data)
        .to.equal('junk')
    })
  })

  describe('find()', () => {
    it('Returns -1 if not found', () => {
      const aDoublyLinkedList = generateTestList()

      expect(aDoublyLinkedList.find('doesntexist'))
        .to.equal(-1)
    })

    it('Returns the first node containing the provided data', () => {
      const aDoublyLinkedList = generateTestList()

      expect(aDoublyLinkedList.find('middle').data)
        .to.equal('middle')
    })
  })

  describe('isEmpty()', () => {
    it('Determines if the list is empty or not', () => {
      const aDoublyLinkedList = new DoublyLinkedList()

      expect(aDoublyLinkedList.isEmpty())
        .to.equal(true)
    })

    it('returns false if the current list is occupied.', () => {
      const aDoublyLinkedList = new DoublyLinkedList()
      aDoublyLinkedList.insert('lotta stuff')
      expect(aDoublyLinkedList.isEmpty())
        .to.equal(false)
    })
  })

  describe('getHeadNode()', () => {
    it('Returns the first node in the list', () => {
      const aDoublyLinkedList = generateTestList()
      expect(aDoublyLinkedList.head.data)
        .to.equal('first')
    })
  })

  describe('getTailNode()', () => {
    it('Returns the first node in the list', () => {
      const aDoublyLinkedList = generateTestList()
      expect(aDoublyLinkedList.tail.data)
        .to.equal('last')
    })
  })

  describe('insertBefore()', () => {
    it('inserts a new head if instructed to insert before head element', () => {
      const aDoublyLinkedList = generateTestList()
      aDoublyLinkedList.insertBefore('first', 'newHead')
      expect(aDoublyLinkedList.head.data)
        .to.equal('newHead')
      expect(aDoublyLinkedList.head.next.data)
        .to.equal('first')
      expect(aDoublyLinkedList.find('first').prev.data)
        .to.equal('newHead')
    })

    it('inserts a new element before the first instance of a matching element', () => {
      const aDoublyLinkedList = generateTestList()
      aDoublyLinkedList.insertBefore('middle', 'newSecond')
      expect(aDoublyLinkedList.head.next.data)
        .to.equal('newSecond')
      expect(aDoublyLinkedList.find('middle').prev.data)
        .to.equal('newSecond')
    })
  })

  describe('insertAfter()', () => {
    it('inserts a new tail if instructed to insert after tail element', () => {
      const aDoublyLinkedList = generateTestList()
      const oldTail = aDoublyLinkedList.getTailNode()
      aDoublyLinkedList.insertAfter('last', 'newTail')
      expect(aDoublyLinkedList.tail.data)
        .to.equal('newTail')
      expect(aDoublyLinkedList.tail.prev)
        .to.equal(oldTail)
      expect(oldTail.next.data)
        .to.equal('newTail')
    })

    it('inserts a new element after the first instance of a matching element', () => {
      const aDoublyLinkedList = generateTestList()
      aDoublyLinkedList.insertAfter('first', 'newSecond')
      expect(aDoublyLinkedList.head.next.data)
        .to.equal('newSecond')
      expect(aDoublyLinkedList.find('middle').prev.data)
        .to.equal('newSecond')
    })
  })

  describe('remove()', () => {
    it('Removes the tail node from the list', () => {
      const aDoublyLinkedList = generateTestList()
      aDoublyLinkedList.remove()
      expect(aDoublyLinkedList.tail.data)
        .to.equal('middle')
      expect(aDoublyLinkedList.tail.next)
        .to.equal(null)
    })
  })

  describe('removeFirst', () => {
    it('removes the head node from the list', () => {
      const aDoublyLinkedList = generateTestList()
      aDoublyLinkedList.removeFirst()
      expect(aDoublyLinkedList.head.data)
        .to.equal('middle')
      expect(aDoublyLinkedList.head.prev)
        .to.equal(null)
    })
  })

  describe('clear()', () => {
    it('clears the head of the linked list', () => {
      const aDoublyLinkedList = generateTestList()
      aDoublyLinkedList.clear()
      expect(aDoublyLinkedList.head)
        .to.equal(null)
    })

    it('clears the tail of the linked list', () => {
      const aDoublyLinkedList = generateTestList()
      aDoublyLinkedList.clear()
      expect(aDoublyLinkedList.tail)
        .to.equal(null)
    })

    it('clears the count of the linked list', () => {
      const aDoublyLinkedList = generateTestList()
      aDoublyLinkedList.clear()
      expect(aDoublyLinkedList.count)
        .to.equal(0)
    })
  })

  describe('contains()', () => {
    it('returns true if the list contains the provided data', () => {
      const aDoublyLinkedList = generateTestList()
      expect(aDoublyLinkedList.contains('middle'))
        .to.equal(true)
    })
    it('returns false if the list does not contain the provided data', () => {
      const aDoublyLinkedList = generateTestList()
      expect(aDoublyLinkedList.contains('WompWomp'))
        .to.equal(false)
    })
  })
})
