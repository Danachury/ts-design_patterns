import Builder from './builder'
import Engine from './engine'
import Gps from './gps'
import { Seats } from './seat'
import TripComputer from './trip-computer'
import Cloneable from '../../../core/cloneable'

// noinspection JSAnnotator
export default class Car extends Cloneable {

  private _engine: Engine
  private _gps: Gps
  private _seats: Seats
  private _tripComputer: TripComputer

  private constructor() {
    super()
  }

  set engine(value: Engine) {
    this._engine = value
  }

  set gps(value: Gps) {
    this._gps = value
  }

  set seats(value: Seats) {
    this._seats = value
  }

  set tripComputer(value: TripComputer) {
    this._tripComputer = value
  }

  get engine(): Engine {
    return this._engine
  }

  get gps(): Gps {
    return this._gps
  }

  get seats(): Seats {
    return this._seats
  }

  get tripComputer(): TripComputer {
    return this._tripComputer
  }

  static Builder = class implements Builder<Car> {

    private _car: Car

    constructor() {
      this.reset()
    }

    reset(): this {
      this._car = new Car()
      return this
    }

    engine(engine: Engine): this {
      this._car.engine = engine
      return this
    }

    gps(gps: Gps): this {
      this._car.gps = gps
      return this
    }

    seats(seats: Seats): this {
      this._car.seats = seats
      return this
    }

    tripComputer(tripComputer: TripComputer): this {
      this._car.tripComputer = tripComputer
      return this
    }

    build(): Car {
      const builtCar = this._car.clone()
      this.reset()
      return builtCar
    }
  }
}
