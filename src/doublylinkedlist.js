'use strict'

class Node {

  constructor( data ) {
    this.data = data
    this.next = null
    this.prev = null
  }

}
export default class DoublyLinkedList {

  constructor () {
      this.head = null
      this.tail = null
      this.count = 0


  }
  // Inserts a node (with the provided data) to the head of the list
  insertFirst ( value ) {
    //create new node
    const node = new Node( value )
    //find if head is defined
    if ( this.head ) {
      //set old head to next of new node
      node.next = this.head
      this.head.prev = node
      //if head is defined, set new node to head
    } else {
      //if not defined set current node to head
      this.tail = node
    }
    this.head = node
    this.count++
  }
  // Returns the size of the list (number of nodes)
  size () {
    return this.count
  }

  // Inserts a node (with the provided data) to the tail of the list
  insert ( value ) {
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
      node.prev = this.tail
      this.tail = node
    }
    //set new tail to null
    //this.tail = null
    this.count++
  }
  //Returns the first node containing the provided data,
  // or -1 if not found
  find( value ) {
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
  // Determines if the list is empty or not
  isEmpty() {
    return this.head ? false : true
  }

  // Returns the first node in the list
  getHeadNode() {
    return this.head
  }

  // Returns the last node in the list
  getTailNode() {
    return this.tail
  }

  // Inserts a node containing data
  // before the first node matching the target value
  insertBefore(target, data) {
    const node = new Node(data)
    const targetNode = this.find(target)

    if (targetNode === this.getHeadNode()) {
      this.head = node
    } else {
      let nodeBeforeTarget = targetNode.prev
      nodeBeforeTarget.next = node
      node.prev = nodeBeforeTarget
    }

    node.next = targetNode
    targetNode.prev = node
    this.count++
  }

  // Inserts a node containing data
  // after the first node matching the target value
  insertAfter(target, data) {
    const node = new Node(data)
    const targetNode = this.find(target)

    if (targetNode === this.getTailNode()) {
      this.tail = node
    } else {
      let nodeAfterTarget = targetNode.next
      nodeAfterTarget.prev = node
      node.next = nodeAfterTarget
    }

    node.prev = targetNode
    targetNode.next = node
    this.count++
  }
  // Removes the tail node from the list
  remove() {
    if (this.count === 1) {
      this.clear()
    } else {
      let newTail = this.getTailNode().prev
      newTail.next = null
      this.tail = newTail
    }
  }
  // Removes the head node from the list
  removeFirst() {
    if (this.count === 1) {
      this.clear()
    } else {
      let newHead = this.getHeadNode().next
      newHead.prev = null
      this.head = newHead
    }
  }
  // Clears the list of all nodes/data
  clear() {
    this.head = null
    this.tail = null
    this.count = 0
  }
  // Determines whether or not the list contains the provided data
  contains(data) {
    return this.find(data) !== -1 ? true : false
  }
}
