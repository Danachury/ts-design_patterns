import Shape from './shape'
import Circle from './circle'
import Square from './square'
import Rectangle from './rectangle'

export default class ShapeFactory {

  static create(shapeType: ShapeType): Shape {
    switch (shapeType) {
      case ShapeType.CIRCLE:
        return new Circle()
      case ShapeType.SQUARE:
        return new Square()
      case ShapeType.RECTANGLE:
        return new Rectangle()
    }
  }
}

export enum ShapeType {
  CIRCLE,
  SQUARE,
  RECTANGLE
}
