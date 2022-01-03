import { Seats } from 'src/patterns/creational/builder/seat'
import Engine from 'src/patterns/creational/builder/engine'
import Gps from 'src/patterns/creational/builder/gps'
import TripComputer from 'src/patterns/creational/builder/trip-computer'

export default interface Builder<T> {

  reset(): this

  withSeats(seats: Seats): this

  withEngine(engine: Engine): this

  withTripComputer(tripComputer: TripComputer): this

  withGPS(gps: Gps): this

  build(): T
}
