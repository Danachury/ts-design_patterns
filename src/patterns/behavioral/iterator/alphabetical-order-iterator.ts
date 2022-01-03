import Iterator from './iterator'
import WordsCollection from './words-collection'

/**
 * Concrete Iterators implement various traversal algorithms. These classes
 * store the current traversal position at all times.
 */
export default class AlphabeticalOrderIterator implements Iterator<string> {

  private _collection: WordsCollection

  /**
   * Stores the current traversal position. An iterator may have a lot of
   * other fields for storing iteration state, especially when it is supposed
   * to work with a particular kind of collection.
   */
  private _position: number = 0

  /**
   * This variable indicates the traversal direction.
   */
  private readonly _reverse: boolean = false

  constructor(collection: WordsCollection, reverse: boolean = false) {
    this._collection = collection
    this._reverse = reverse

    if (reverse)
      this._position = collection.count - 1
  }

  get current(): string {
    return this._collection.items[this._position]
  }

  get next(): string {
    const item = this._collection.items[this._position]
    this._position += this._reverse ? -1 : 1
    return item
  }

  get key(): number {
    return this._position
  }

  get valid(): boolean {
    if (this._reverse)
      return this._position >= 0
    return this._position < this._collection.count
  }

  rewind(): void {
    this._position = this._reverse ? this._collection.count - 1 : 0
  }
}
