'use strict'

export default class HashTable {
  constructor() {
    this.count = 0
    this.data = {}
  }
  // generates a hash for the key "keyName"
  hash( key ) {
    let str = key.toString()
    return (str.split('').reduce((prevHash, currVal) =>
      ((prevHash << 5) - prevHash) + currVal.charCodeAt(0), 0)).toString();
  }
  // adds a key-value pair to the hash table.
  put( key, value ) {
    let hashedKey = this.hash(key)
    if (!this.data[hashedKey]) {this.data[hashedKey] = new Object}
    this.data[hashedKey][key.toString()] = value
    this.count++
  }
  // returns the data associated with key.
  get( key ) {
    let bucket = this.data[this.hash(key)]
    return bucket ? bucket[key.toString()] : undefined
  }
  // returns true if the hash table contains the key.
  contains( key ) {
    return this.get( key ) !== undefined ? true : false
  }
  // takes a callback function and passes it each key and value in sequence.
  // ht.iterate((k, v) => console.log(`${k}: ${v}`))
  iterate(callback) {
    for (let bucket in this.data) {
      for (let key in this.data[bucket]) {
        callback(key, this.data[bucket][key])
      }
    }
  }
  // removes a key-value pair by key.
  remove( key ) {
    let index = this.hash(key)
    let bucket = this.data[index]
    delete bucket[key.toString()]
    this.count--
    bucket == {} && this.data.splice[index, 1]
  }
  // returns the number of key-value pairs in the hash table.
  size() {
    return this.count
  }
}
