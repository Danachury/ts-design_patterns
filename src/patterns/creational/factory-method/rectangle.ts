import Shape from './shape'

export default class Rectangle implements Shape {

  draw(): void {
    console.log('Rectangle!')
  }
}
