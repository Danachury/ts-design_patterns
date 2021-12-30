import Shape from './shape'
import ShapeFactory, { ShapeType } from './shape-factory'

const circle: Shape = ShapeFactory.create(ShapeType.CIRCLE)
const square: Shape = ShapeFactory.create(ShapeType.SQUARE)
const rectangle: Shape = ShapeFactory.create(ShapeType.RECTANGLE)

circle.draw()
square.draw()
rectangle.draw()
