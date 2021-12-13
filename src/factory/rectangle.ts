import Shape from 'src/factory/shape'

export default class Rectangle implements Shape {

  draw(): void {
    console.log('Rectangle!')
  }
}
