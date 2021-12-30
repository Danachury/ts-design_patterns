import Facade from './system.facade'

export class Client {

  code(facade: Facade): string {
    return facade.operation()
  }
}
