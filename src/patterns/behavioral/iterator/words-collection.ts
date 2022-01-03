/**
 * Concrete Collections provide one or several methods for retrieving fresh
 * iterator instances, compatible with the collection class.
 */
import Aggregator from './aggregator'
import Iterator from './iterator'
import AlphabeticalOrderIterator from './alphabetical-order-iterator'

export default class WordsCollection implements Aggregator<string> {

  private _items: string[] = []

  addItem(item: string): void {
    this._items.push(item)
  }

  get items(): string[] {
    return this._items
  }

  get count(): number {
    return this._items.length
  }

  get iterator(): Iterator<string> {
    return new AlphabeticalOrderIterator(this)
  }

  get reverseIterator(): Iterator<string> {
    return new AlphabeticalOrderIterator(this, true)
  }
}
