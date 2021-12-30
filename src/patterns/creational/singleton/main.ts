import Logger from './logger'

const logger = Logger.instance()
Logger.instance()
Logger.instance()

console.log('Is Instantiated:', logger.isInstantiated)
