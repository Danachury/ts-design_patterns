import Iterator from './iterator'

export default interface Aggregator<T> {

  /**
   * Retrieve an external iterator.
   */
  get iterator(): Iterator<T>

  /**
   * Retrieve an external reverse iterator.
   */
  get reverseIterator(): Iterator<T>
}
