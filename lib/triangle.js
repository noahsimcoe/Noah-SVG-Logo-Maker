const Shapes = require("./shapes");

class Triangle extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    renderShape() {
        return `<svg xmlns="http://www.w3.org/2000/svg">
        width="30%" height="30%" viewBox="0 0 100 100">
        <polygon fill="${this.shapeColor}" points="225 100, 350 250, 100 250"/>
        <text x="225" y="200" fill="${this.textColor}" font-size="50" text-anchor="middle" alignment-baseline="central">${(this.text).toUpperCase()}</text>
     </svg>`
        // //<svg
        //     height="400" width="400"
        //     xmlns="http://www.w3.org/2000/svg">
        //     <rect fill="${this.shapeColor}" x="100" y="100" width="200" height="200"/>
        //     <text x="200" y="200" fill="${this.textColor}" font-size="80" text-anchor="middle" alignment-baseline="central">${(this.text).toUpperCase()}</text>
        // </svg>`
    }
};

module.exports = Triangle;