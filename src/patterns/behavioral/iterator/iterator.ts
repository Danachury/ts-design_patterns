/**
 * Iterator Design Pattern
 *
 * Intent: Lets you traverse elements of a collection without exposing its
 * underlying representation (list, stack, tree, etc.).
 */
export default interface Iterator<T> {

  /**
   * Return the current T element.
   */
  get current(): T

  /**
   * Return the current element and move forward to next element.
   * @returns T element
   */
  get next(): T

  /**
   * Return the key of the current element.
   */
  get key(): number

  /**
   * Checks if current position is valid.
   */
  get valid(): boolean

  /**
   * Rewind the Iterator to the first element.
   */
  rewind(): void
}
