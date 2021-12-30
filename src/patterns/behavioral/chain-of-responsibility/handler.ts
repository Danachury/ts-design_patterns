export default interface Handler {

  handle(request: string): string

  setNext(handler: Handler): Handler
}

export abstract class AbstractHandler implements Handler {

  private _nextHandler: Handler

  handle(request: string): string {
    if (!this._nextHandler)
      return undefined
    return this._nextHandler.handle(request)
  }

  setNext(handler: Handler): Handler {
    this._nextHandler = handler
    return handler
  }
}
