const Shapes = require("./shapes");

class Triangle extends Shapes {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg"
        height="300" width="200">
        width="30%" height="30%" viewBox="0 0 100 100">
        <polygon fill="${this.shapeColor}" points="100 50, 0 250, 200 250"/>
        <text x="100" y="200" fill="${this.textColor}" font-size="50" text-anchor="middle" alignment-baseline="central">${(this.text).toUpperCase()}</text>
     </svg>`
    }
    renderSpecs() {
        return `${this.shape}, ${this.shapeColor}`
    }
};

module.exports = Triangle;