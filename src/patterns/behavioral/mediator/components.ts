/**
 * The Base Component provides the basic functionality of storing a mediator's
 * instance inside component objects.
 */
import { Mediator } from './mediator'

export class BaseComponent {

  protected mediator: Mediator

  constructor(mediator?: Mediator) {
    this.mediator = mediator!
  }

  public withMediator(value: Mediator): this {
    this.mediator = value
    return this
  }
}

export class Component1 extends BaseComponent {

  public doA(): void {
    console.log('Component 1 does A.')
    this.mediator.notify(this, 'A')
  }

  public doB(): void {
    console.log('Component 1 does B.')
    this.mediator.notify(this, 'B')
  }
}

export class Component2 extends BaseComponent {

  public doC(): void {
    console.log('Component 2 does C.')
    this.mediator.notify(this, 'C')
  }

  public doD(): void {
    console.log('Component 2 does D.')
    this.mediator.notify(this, 'D')
  }
}
