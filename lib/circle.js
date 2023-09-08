//class the paremt shape class
const Shape = require('./shape');

//create a circle class to generate the shape and the color
class Circle extends Shape {
    constructor(shape_color) {
        super(shape_color);
      }

      CreateShape() {
        const shape = `<circle cx="150" cy="105" r="80" fill="${this.shape_color}"/>` //the shape size and color
        return shape//here is the shape size
      }

}

//export the class
module.exports = Circle;