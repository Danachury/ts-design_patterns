import Shape from './shape'

export default class Square implements Shape {

  draw(): void {
    console.log('Square!')
  }
}
