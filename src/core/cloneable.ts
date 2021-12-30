interface Cloneable {
  clone(): this
}

export default abstract class DefaultCloneable implements Cloneable {
  clone(): this {
    const clone = Object.create(this) // Create prototype with functional methods
    return Object.assign(clone, this as any) // Assign properties
  }
}
