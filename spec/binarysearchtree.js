import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import BinarySearchTree from '../src/binarysearchtree'

chai.use(chaiChange)

const generateTestList = () => {
  const list = new BinarySearchTree()

  list.insert(1)
  list.insert(2)
  list.insert(3)
  list.insert(4)
  list.insert(5)

  return list
}

// const bst = new BinarySearchTree()
// bst.insert(3)
// bst.search(3)  
// bst.remove(3)
// bst.traverse('inOrder', (val) => console.log(val)) // traverse the tree in the defined order (either 'preOrder', 'inOrder', or 'postOrder') and apply function on each node's value.
// bst.count()    // return the number of nodes in the tree.

describe.only('BinarySearchTree', () => {
  'use strict'

  it('exists', () => {
    expect(BinarySearchTree).to.be.a('function')
  })

  describe('insert()', () => {

    it('inserts a node with the specified value into the tree.', () => {
      const aBinarySearchTree = new BinarySearchTree()

      expect(() => aBinarySearchTree.insertFirst('foo'))
        .to.alter(() => aBinarySearchTree.size(), { from: 0, to: 1 })
    })
  })

  describe('search()', () => {
    it('returns a node object or null if not found.', () => {
      const aBinarySearchTree = generateTestList()

      expect(() => aBinarySearchTree.insert('junk'))
        .to.alter(() => aBinarySearchTree.size(), { from: 3, to: 4 })
    })
  })

  describe('remove()', () => {
    it('removes a node with a given value from the tree if the value exists.', () => {
      const aBinarySearchTree = new BinarySearchTree()

      expect(aBinarySearchTree.isEmpty())
        .to.equal(true)
    })
  })

  describe('traverse()', () => {
    it('traverse the tree in the defined order (either preOrder, inOrder, or postOrder) and apply function on each node value', () => {
      const aBinarySearchTree = new BinarySearchTree()

      expect(aBinarySearchTree.isEmpty())
        .to.equal(true)
    })
  })

  describe('count()', () => {
    it('return the number of nodes in the tree', () => {
      const aBinarySearchTree = generateTestList()
      expect(aBinarySearchTree.head.data)
        .to.equal('first')
    })
  })
})
