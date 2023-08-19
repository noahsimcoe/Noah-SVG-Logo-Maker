const Shapes = require("./shapes");

class Square extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    renderShape() {
        return`<svg
            height="400" width="400"
            xmlns="http://www.w3.org/2000/svg">
            <rect fill="${this.shapeColor}" x="100" y="100" width="200" height="200"/>
            <text x="200" y="200" fill="${this.textColor}" font-size="50" text-anchor="middle" alignment-baseline="central">${(this.text).toUpperCase()}</text>
        </svg>`
    }
};

module.exports = Square;