class Shapes {
    constructor ( text, textColor, shape, shapeColor ) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
    printData() {
        console.log(`the text "${this.text}" is ${this.textColor}, and the ${this.shape} is ${this.shapeColor}`);
    };
}

module.exports = Shapes;