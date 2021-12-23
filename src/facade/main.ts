import { Subsystem1, Subsystem2 } from './subsystem'
import { Facade, System } from './system.facade'
import { Client } from './client'

const subsystem1 = new Subsystem1()
const subsystem2 = new Subsystem2()
const facade: Facade = new System(subsystem1, subsystem2)
const client = new Client()

console.log(client.code(facade))
