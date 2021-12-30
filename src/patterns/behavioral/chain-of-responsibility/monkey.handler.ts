import { AbstractHandler } from './handler'

export default class MonkeyHandler extends AbstractHandler {

  handle(request: string): string {
    if (request === 'Banana')
      return `Monkey: I'll eat the ${request}.`
    return super.handle(request)
  }
}
