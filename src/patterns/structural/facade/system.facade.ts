import { Subsystem1, Subsystem2 } from './subsystem'

export default interface Facade {
  operation(): string
}

export class System implements Facade {

  protected subsystem1: Subsystem1

  protected subsystem2: Subsystem2

  constructor(subsystem1: Subsystem1, subsystem2: Subsystem2) {
    this.subsystem1 = subsystem1 || new Subsystem1()
    this.subsystem2 = subsystem2 || new Subsystem2()
  }

  operation(): string {
    let result = 'Facade initializes subsystems:\n'
    result += this.subsystem1.operation1()
    result += this.subsystem2.operation1()
    result += 'Facade orders subsystems to perform the action:\n'
    result += this.subsystem1.operationN()
    result += this.subsystem2.operationZ()
    return result
  }
}
