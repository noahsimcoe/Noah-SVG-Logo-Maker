const Shapes = require("./shapes");

class Circle extends Shapes {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
    }
    renderShape() {
        return`<svg
            height="300" width="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle fill="${this.shapeColor}" cx="100" cy="150" r="100"/>
            <text x="100" y="150" fill="${this.textColor}" font-size="50" text-anchor="middle" alignment-baseline="central">${(this.text).toUpperCase()}</text>
        </svg>`
    }
};

module.exports = Circle;