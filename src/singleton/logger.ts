export default class Logger {

  private static _instance: Logger

  private constructor() {}

  static instance(): Logger {
    if (!this._instance) {
      console.log('Creating new instance of Logger')
      this._instance = new Logger()
    }
    return this._instance
  }

  get isInstantiated(): boolean {
    return !!Logger._instance
  }
}
