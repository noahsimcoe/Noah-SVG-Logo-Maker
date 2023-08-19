const Shapes = require("./shapes");

class Square extends Shapes {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
    }
    render() {
        console.log(`this is the render for a ${this.shapeColor} square`)
    };

    renderShape() {
        // return `<rect x="10" y="10" width="30" height="30" stroke="black" fill="${this.shapeColor}" stroke-width="5"/>`;
        return`<svg
            height="400" width="400"
            xmlns="http://www.w3.org/2000/svg">
            <rect fill="${this.shapeColor}" x="100" y="100" width="200" height="200"/>
            <text x="200" y="200" fill="${this.textColor}" font-size="80" text-anchor="middle" alignment-baseline="central">${(this.text).toUpperCase()}</text>
        </svg>`
    }
};

module.exports = Square;