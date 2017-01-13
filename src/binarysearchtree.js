'use strict'

class Node {

  constructor( data ) {
    this.data = data
    this.next = null
  }

}
export default class BinarySearchTree {

  constructor () {
      this.head = null
      this.tail = null
      this.count = 0


  }
  // inserts a node with the specified value into the tree.
  insert ( value ) {
    //create new node
    const node = new Node( value )
    //find if head is defined
    if ( this.head ) {
      //set old head to next of new node
      node.next = this.head
      //if head is defined, set new node to head
    } else {
      //if not defined set current node to head
      this.tail = node
    }
    this.head = node
    this.count++
  }
  // returns a node object or null if not found.
  search () {
    return this.count
  }

  // removes an value's node (if exists) from the tree.
  remove ( value ) {
    //create new node
    const node = new Node( value )
    //find if tail is defined
    if ( this.head === null ) {
    //set oldtail next to new node
      this.head = node
      this.tail = node

    //set newnode to tail
    } else {
      this.tail.next = node
      this.tail = node
    }
    //set new tail to null
    //this.tail = null
    this.count++
  }
  // traverse the tree in the defined order (either 'preOrder', 'inOrder', or 'postOrder') and apply function on each node's value.
  traverse ( 'inOrder', (val) => console.log(val) ) {
    let currentNode = this.head
    while (currentNode !== this.tail) {
      if (currentNode.data === value) {
        return currentNode
      } else {
        currentNode = currentNode.next
      }
    }
    return currentNode.data === value ? currentNode : -1
  }
  // return the number of nodes in the tree.
  count() {
    return this.head ? false : true
  }
}
