const Shape = require('./shape');

class Triangle extends Shape {
    constructor(shape_color) {
        super(shape_color);
      }

      CreateShape() {
        const shape = `<polygon points="150 2 45 160 255 160" fill="${this.shape_color}"/>`
        return shape//here is the shape size
      }

}

module.exports = Triangle;