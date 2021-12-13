import Shape from 'src/factory/shape'

export default class Square implements Shape {

  draw(): void {
    console.log('Square!')
  }
}
