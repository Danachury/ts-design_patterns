/**
 * The client code may or may not know about the Concrete Iterator or Collection
 * classes, depending on the level of indirection you want to keep in your
 * program.
 */
import WordsCollection from './words-collection'

const collection = new WordsCollection()
collection.addItem('First')
collection.addItem('Second')
collection.addItem('Third')

const iterator = collection.iterator

console.log('Straight traversal:')
while (iterator.valid)
  console.log(iterator.next)

console.log('')
console.log('Reverse traversal:')
const reverseIterator = collection.reverseIterator

while (reverseIterator.valid)
  console.log(reverseIterator.next)
