//class the paremt shape class
const Shape = require('./shape');

//create a triangle class to generate the shape and the color
class Triangle extends Shape {
    constructor(shape_color) {
        super(shape_color);
      }

      CreateShape() {
        const shape = `<polygon points="150 2 45 160 255 160" fill="${this.shape_color}"/>`//the shape size and color
        return shape//here is the shape size
      }

}

//export the class
module.exports = Triangle;