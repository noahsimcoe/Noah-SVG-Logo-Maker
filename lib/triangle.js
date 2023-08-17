const Shapes = require("./shapes");

class Triangle extends Shapes {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
    }
    render() {
        console.log("this is the render for a triangle")
    };
};

module.exports = Triangle;