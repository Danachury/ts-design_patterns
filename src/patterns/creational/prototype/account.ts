export interface Cloneable {
  clone(): Cloneable
}

export abstract class DefaultCloneable implements Cloneable {
  clone(): this {
    // Create prototype with functional methods
    const clone = Object.create(this)
    // Assign properties
    return Object.assign(clone, this as any)
  }
}

export class Account extends DefaultCloneable {

  constructor(private _id: number,
              private _name: string) {
    super()
  }

  set id(value: number) {
    this._id = value
  }

  get id(): number {
    return this._id
  }

}
