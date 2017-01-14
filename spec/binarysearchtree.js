import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import BinarySearchTree from '../src/binarysearchtree'

chai.use(chaiChange)

const generateTestTree = () => {
  const bst = new BinarySearchTree()

  bst.insert(6)
  bst.insert(3)
  bst.insert(8)
  bst.insert(7)

  return bst
}
describe.only('BinarySearchTree', () => {
  'use strict'

  it('exists', () => {
    expect(BinarySearchTree).to.be.a('function')
  })

  describe('insert()', () => {

    it('increments the count when inserting a node', () => {
      const aBinarySearchTree = new BinarySearchTree()

      expect(() => aBinarySearchTree.insert(6))
        .to.alter(() => aBinarySearchTree.count(), { from: 0, to: 1 })
    })

    it('inserts a node with the specified value into the tree.', () => {
      const aBinarySearchTree = generateTestTree()


      expect(aBinarySearchTree.root.data)
        .to.equal(6)
      expect(aBinarySearchTree.root.left.data)
        .to.equal(3)
      expect(aBinarySearchTree.root.right.data)
        .to.equal(8)
      expect(aBinarySearchTree.root.right.left.data)
        .to.equal(7)
    })

    it('sets parent node flags appropriately', () => {
      const aBinarySearchTree = generateTestTree()

      expect(aBinarySearchTree.root.parent)
        .to.equal(null)
      expect(aBinarySearchTree.search(3).parent.data)
        .to.equal(6)
    })
  })

  describe('search()', () => {
    it('returns null if the tree is empty.', () => {
      const aBinarySearchTree = new BinarySearchTree()

      expect(aBinarySearchTree.search('nope'))
        .to.equal(null)
    })

    it('returns a matching root node', () => {
      const aBinarySearchTree = generateTestTree()

      expect(aBinarySearchTree.search(6))
        .to.equal(aBinarySearchTree.root)
    })

    it('returns a matching branch/leaf node', () => {
      const aBinarySearchTree = generateTestTree()

      expect(aBinarySearchTree.search(3))
        .to.equal(aBinarySearchTree.root.left)
    })
  })

  describe('remove()', () => {
    it('removes a node with a given value from the tree if the value exists.', () => {
      const aBinarySearchTree = generateTestTree()

      expect(() => aBinarySearchTree.remove(7))
        .to.alter(() => aBinarySearchTree.count(), { from: 4, to: 3 })
      expect(aBinarySearchTree.root.right.left)
        .to.equal(null)
    })

    it('returns false if the node w/ given data is not found', () => {
      const aBinarySearchTree = generateTestTree()

      expect(aBinarySearchTree.remove('nope'))
        .to.alter(() => aBinarySearchTree.count(), { from: 4, to: 4 })
    })
  })

  describe('traverse()', () => {
    it('traverse the tree in the defined order (either preOrder, inOrder, or postOrder) and apply function on each node value', () => {
      const aBinarySearchTree = generateTestTree()

      const orderValues = (order) => {
        const result = []
        aBinarySearchTree.traverse(order, (x) => result.push(x))
        return result
      }

      expect(orderValues(aBinarySearchTree, 'inOrder'))
        .to.equal([3, 6, 7, 8])
      expect(orderValues(aBinarySearchTree, 'preOrder'))
        .to.equal([6, 3, 8, 7])
      expect(orderValues(aBinarySearchTree, 'postOrder'))
        .to.equal([3, 7, 8, 6])
    })
  })

  describe('count()', () => {
    it('return the number of nodes in the tree', () => {
      const aBinarySearchTree = generateTestTree()
      expect(aBinarySearchTree.count())
        .to.equal(4)
    })
  })
})
