import { Seats } from 'src/builder/seat'
import Engine from 'src/builder/engine'
import Gps from 'src/builder/gps'
import TripComputer from 'src/builder/trip-computer'

export default interface Builder<T> {

  reset(): this

  setSeats(seats: Seats): this

  setEngine(engine: Engine): this

  setTripComputer(tripComputer: TripComputer): this

  setGPS(gps: Gps): this

  build(): T
}
