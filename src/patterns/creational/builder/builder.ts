import { Seats } from 'src/patterns/creational/builder/seat'
import Engine from 'src/patterns/creational/builder/engine'
import Gps from 'src/patterns/creational/builder/gps'
import TripComputer from 'src/patterns/creational/builder/trip-computer'

export default interface Builder<T> {

  reset(): this

  setSeats(seats: Seats): this

  setEngine(engine: Engine): this

  setTripComputer(tripComputer: TripComputer): this

  setGPS(gps: Gps): this

  build(): T
}
