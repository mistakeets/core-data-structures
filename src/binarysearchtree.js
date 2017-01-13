'use strict'

class Node {
  constructor( data ) {
    this.left = null
    this.right = null
    this.data = data
  }
}

export default class BinarySearchTree {

  constructor () {
    this.size = 0
    this.root = null
  }
  // inserts a node with the specified value into the tree.
  insert ( data ) {
    const node = new Node(data)
    this.size++

    const findTargetNode = ( data, currentNode ) => {
      if (!currentNode) {
        this.root = node
        return
      }

      let targetNode = data < currentNode.data
       ? currentNode.left
       : currentNode.right

      if (!targetNode) {
        data < currentNode.data
         ? (() => currentNode.left = node)()
         : (() => currentNode.right = node)()
         return
      }

      return findTargetNode( data, targetNode )
    }

    findTargetNode( data, this.root )
  }
  // returns a node object or null if not found.
  search ( data ) {

  }

  // removes a node value (if exists) from the tree.
  remove ( data ) {

  }
  // traverse the tree in the defined order (either 'preOrder', 'inOrder', or 'postOrder') and apply function on each node's value.
  // 'inOrder', (val) => console.log(val)
  traverse ( order, callback ) {

  }
  // return the number of nodes in the tree.
  count() {
    return this.size
  }
}
