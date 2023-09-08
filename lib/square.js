const Shape = require('./shape');

class Square extends Shape{
    constructor(shape_color) {
        super(shape_color);
      }

      CreateShape() {
        const shape = `<rect x="90" y="42" width="120" height="120" fill="${this.shape_color}"/>` //change
        return shape//here is the shape size
      }

}

module.exports = Square;