/**
 * The Base Component provides the basic functionality of storing a mediator's
 * instance inside component objects.
 */
import { Mediator } from './mediator'

export class BaseComponent {

  protected _mediator: Mediator

  constructor(mediator?: Mediator) {
    this._mediator = mediator!
  }

  public get getMediator(): Mediator {
    return this._mediator
  }

  public mediator(value: Mediator): this {
    this._mediator = value
    return this
  }
}

export class Component1 extends BaseComponent {

  public doA(): void {
    console.log('Component 1 does A.')
    this.getMediator.notify(this, 'A')
  }

  public doB(): void {
    console.log('Component 1 does B.')
    this.getMediator.notify(this, 'B')
  }
}

export class Component2 extends BaseComponent {

  public doC(): void {
    console.log('Component 2 does C.')
    this.getMediator.notify(this, 'C')
  }

  public doD(): void {
    console.log('Component 2 does D.')
    this.getMediator.notify(this, 'D')
  }
}
