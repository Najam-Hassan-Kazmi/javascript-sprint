const { Rectangle } = require('./rectangle')

class Square extends Rectangle {
  constructor(side) {
    super(side, side)
    this.side = side
  }
}

const square = new Square(4);
const rectangle = new Rectangle(5, 3)

module.exports = { Square, square, rectangle }