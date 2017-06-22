'use strict'

export default class set {


  constructor(aSet = []) {
    this.top = 0
    this.elements = aSet
  }


  add(element) {
    let count = 0
    this.elements[this.top++] = element
    for (let i = 0; i <= this.top; i++) {
      if (this.elements[i] === element) {
        count++
      }
      if (count >= 1) {
        return false
      }
    }
  }

  isEmpty() {
    return this.top === 0
  }

  contains(element) {

    if (this.elements.includes(element)) {
      return true
    } else {
      return false
    }
  }

  remove(element) {
    let position = this.elements.indexOf(element)
    this.elements.splice(position, 1)
    this.top--
  }

  forEach(callback) {
    this.elements = this.elements.map(callback)
    return this.elements
  }

  size() {
    return this.top
  }

  difference(set1, set2) {
    let setDifference = [];

    for (let i = 0; i < set1.elements.length; i++) {
      if (set2.elements.indexOf(set1.elements[i]) === -1) {
        setDifference.push(set1.elements[i]);
      }
    }
    return setDifference;
  }

  members() {
    return [...this.elements]
  }

  union(otherSet) {
    const unionElements = [...this.elements]
    otherSet.members().forEach(element => {
      if (!unionElements.includes(element)) {
        unionElements.push(element)
      }
    })

    // return a new set created from those elements
    return new set([...unionElements])
  }

  intersection(set1, set2) {

    let setIntersection = [];

    for (let i = 0; i < set1.elements.length; i++) {
      if (set2.elements.indexOf(set1.elements[i]) !== -1) {
        setIntersection.push(set1.elements[i]);
      }
    }
    return setIntersection;
  }

  subset(things) {
    let result
    for (let i = 0; i < this.elements.length; i++) {
      if (things.elements.find((element) => element === this.elements[i])) {
        result = true
      } else {
        result = false
        break
      }
    }
    return result
  }

  clone() {
    const newSet = new set()
    for (var i = 0; i < this.elements.length; i++) {
      newSet.add(this.elements[i]);
    }
    return newSet;
  }

}
