import Shape from './shape'

export default class Circle implements Shape {

  draw(): void {
    console.log('Circle!')
  }
}
