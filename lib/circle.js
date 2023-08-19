const Shapes = require("./shapes");

class Circle extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    renderShape() {
        return`<svg
            height="400" width="400"
            xmlns="http://www.w3.org/2000/svg">
            <circle fill="${this.shapeColor}" cx="200" cy="200" r="100"/>
            <text x="200" y="200" fill="${this.textColor}" font-size="50" text-anchor="middle" alignment-baseline="central">${(this.text).toUpperCase()}</text>
        </svg>`
    }
};

module.exports = Circle;