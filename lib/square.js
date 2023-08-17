const Shapes = require("./shapes");

class Square extends Shapes {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
    }
    render() {
        console.log("this is the render for a square")
    };
};

module.exports = Square;