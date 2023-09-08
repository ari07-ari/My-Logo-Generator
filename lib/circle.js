const Shape = require('./shape');

class Circle extends Shape {
    constructor(shape_color) {
        super(shape_color);
      }

      CreateShape() {
        const shape = `<circle cx="150" cy="105" r="80" fill="${this.shape_color}"/>` //change
        return shape//here is the shape size
      }

}
module.exports = Circle;