import Car from './car'
import Engine from './engine'
import { Seat } from './seat'
import Gps from './gps'
import TripComputer from './trip-computer'
import Manual from './manual'

const engine = new Engine()
const seats = [new Seat(), new Seat(), new Seat(), new Seat()]
const gps = new Gps()
const tripComputer = new TripComputer()

const car: Car = new Car.Builder()
  .engine(engine)
  .seats(seats)
  .gps(gps)
  .tripComputer(tripComputer)
  .build()

const manual: Manual = new Manual.Builder()
  .engine(engine)
  .seats(seats)
  .gps(gps)
  .tripComputer(tripComputer)
  .build()

console.log('Built Car:', car)
console.log('Built Manual:', manual)
