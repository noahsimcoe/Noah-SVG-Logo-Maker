const Shapes = require("./shapes");

class Square extends Shapes {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
    }
    render() {
        return`<svg
            height="300" width="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect fill="${this.shapeColor}" x="0" y="50" width="200" height="200"/>
            <text x="100" y="150" fill="${this.textColor}" font-size="50" text-anchor="middle" alignment-baseline="central">${(this.text).toUpperCase()}</text>
        </svg>`
    }
    renderSpecs() {
        return `${this.shape}, ${this.shapeColor}`
    }
};

module.exports = Square;