'use strict'

class Node {
  constructor( data, parent=null ) {
    this.parent = parent
    this.left = null
    this.right = null
    this.data = data
  }

  find (direction) {
    let side, node

    switch (direction) {
      case 'left':
      [side, node] = ['left', this.left]
      break

      case 'right':
      [side, node] = ['right', this.right]
      break

      case 'parent':
      let position = this.parent.left.value === this.value
       ? 'left'
       : 'right'
      [side, node] = [position, this.parent.find(position)]
      break
    }

     return [side, node]
  }
}

export default class BinarySearchTree {

  constructor () {
    this.size = 0
    this.root = null
  }
  // inserts a node with the specified value into the tree.
  insert ( data ) {
    const tree = this
    const node = new Node(data)
    this.size++

    const findTargetNode = function( data, currentNode ) {
      if (!currentNode) {
        tree.root = node
        return
      }

      let [direction, targetNode] = data < currentNode.data
       ? currentNode.find('left')
       : currentNode.find('right')

      return targetNode
       ? findTargetNode( data, targetNode )
       : (() => {
         node.parent = currentNode

         direction === 'left'
          ? (() => currentNode.left = node)()
          : (() => currentNode.right = node)()
       })()
    }

    findTargetNode( data, tree.root )
  }
  // returns a node object or null if not found.
  search ( data ) {
    const findTargetNode = function( data, currentNode ) {
      return !currentNode ? currentNode : (() => {
        if (currentNode.data === data) { return currentNode }

        let [direction, targetNode] = data < currentNode.data
        ? currentNode.find('left')
        : currentNode.find('right')

        return targetNode.data === data
        ? targetNode
        : findTargetNode( data, targetNode )
      })()
    }

    return findTargetNode( data, this.root )
  }

  // removes a node value (if exists) from the tree.
  remove ( data ) {
    const node = this.search(data)
    if (node) {
      node.find(parent) = null
    }
  }
  // traverse the tree in the defined order (either 'preOrder', 'inOrder', or 'postOrder') and apply function on each node's value.
  // 'inOrder', (val) => console.log(val)
  traverse ( order, callback ) {
    // InOrder: Until all nodes are traversed −
    // Step 1 − Recursively traverse left subtree.
    // Step 2 − Visit root node.
    // Step 3 − Recursively traverse right subtree.

    // PreOrder: Until all nodes are traversed −
    // Step 1 − Visit root node.
    // Step 2 − Recursively traverse left subtree.
    // Step 3 − Recursively traverse right subtree.

    // PostOrder: Until all nodes are traversed −
    // Step 1 − Recursively traverse left subtree.
    // Step 2 − Recursively traverse right subtree.
    // Step 3 − Visit root node.
  }
  // return the number of nodes in the tree.
  count() {
    return this.size
  }
}
