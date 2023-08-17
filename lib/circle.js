const Shapes = require("./shapes");

class Circle extends Shapes {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
    }
    render() {
        console.log("this is the render for a circle")
    };
};

module.exports = Circle;