import { Component1, Component2 } from './components'

/**
 * The Mediator interface declares a method used by components to notify the
 * mediator about various events. The {@link Mediator} may react to these events and
 * pass the execution to other components.
 */
export interface Mediator {
  notify(sender: object, event: string): void
}

/**
 * Concrete Mediators implement cooperative behavior by coordinating several
 * components.
 */
export class ConcreteMediator implements Mediator {

  private _component1: Component1
  private _component2: Component2

  constructor(component1: Component1, component2: Component2) {
    this._component1 = component1.mediator(this)
    this._component2 = component2.mediator(this)
  }

  notify(sender: object, event: string): void {
    if (event === 'A') {
      console.log('Mediator reacts on A and triggers following operations:')
      this._component2.doC()
    }

    if (event === 'D') {
      console.log('Mediator reacts on D and triggers following operations:')
      this._component1.doB()
      this._component2.doC()
    }
  }
}
