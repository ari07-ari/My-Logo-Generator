//class the paremt shape class
const Shape = require('./shape');

//create a square class to generate the shape and the color
class Square extends Shape{
    constructor(shape_color) {
        super(shape_color);
      }

      CreateShape() {
        const shape = `<rect x="90" y="42" width="120" height="120" fill="${this.shape_color}"/>` //the shape size and color
        return shape//here is the shape size
      }

}

//export the class
module.exports = Square;