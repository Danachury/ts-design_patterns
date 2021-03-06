import { ConcreteMediator } from './mediator'
import { Component1, Component2 } from './components'

const c1 = new Component1()
const c2 = new Component2()

/*
 * Initialize mediator.
 */
new ConcreteMediator(c1, c2)

console.log('Client triggers operation A.')
c1.doA()

console.log('')
console.log('Client triggers operation D.')
c2.doD()
