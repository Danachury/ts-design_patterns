import Builder from './builder'
import Engine from './engine'
import Gps from './gps'
import { Seats } from './seat'
import TripComputer from './trip-computer'
import DefaultCloneable from '../common/cloneable'

// noinspection JSAnnotator
export default class Manual extends DefaultCloneable {

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

  static Builder = class implements Builder<Manual> {

    private _manual: Manual

    constructor() {
      this.reset()
    }

    reset(): this {
      this._manual = new Manual()
      return this
    }

    setEngine(engine: Engine): this {
      this._manual.engine = engine;
      return this
    }

    setGPS(gps: Gps): this {
      this._manual.gps = gps
      return this;
    }

    setSeats(seats: Seats): this {
      this._manual.seats = seats
      return this;
    }

    setTripComputer(tripComputer: TripComputer): this {
      this._manual.tripComputer = tripComputer
      return this;
    }

    build(): Manual {
      const builtManual = this._manual.clone()
      this.reset()
      return builtManual;
    }
  }
}
