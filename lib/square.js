const Shapes = require("./shapes");

class Square extends Shapes {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
    }
    render(shapeColor) {
        console.log(`this is the render for a ${this.shapeColor} square`)
    };

    renderShape(text, shapeColor) {
        // return `<rect x="10" y="10" width="30" height="30" stroke="black" fill="${this.shapeColor}" stroke-width="5"/>`;
        return`<svg
            viewBox="0 0 300 100"
            xmlns="http://www.w3.org/2000/svg"
            fill="${this.shapeColor}">
            <rect x="10" y="10" width="30" height="30"/>
            <text x="5" y="5">${this.text}</text>
        </svg>`
    }
};

module.exports = Square;