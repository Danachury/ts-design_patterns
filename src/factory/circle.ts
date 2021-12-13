import Shape from 'src/factory/shape'

export default class Circle implements Shape {

  draw(): void {
    console.log('Circle!')
  }
}
