import { Seats } from 'src/patterns/creational/builder/seat'
import Engine from 'src/patterns/creational/builder/engine'
import Gps from 'src/patterns/creational/builder/gps'
import TripComputer from 'src/patterns/creational/builder/trip-computer'

export default interface Builder<T> {

  reset(): this

  seats(seats: Seats): this

  engine(engine: Engine): this

  tripComputer(tripComputer: TripComputer): this

  gps(gps: Gps): this

  build(): T
}
