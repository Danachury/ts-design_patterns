interface Cloneable {
  clone(): this
}

export default abstract class DefaultCloneable implements Cloneable {
  clone(): this {
    // Create prototype with functional methods
    const clone = Object.create(this)
    // Assign properties
    return Object.assign(clone, this as any)
  }
}
