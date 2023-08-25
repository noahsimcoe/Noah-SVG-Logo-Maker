const fs = require("fs");
const inquirer = require("inquirer");
const MaxLengthInputPrompt = require("inquirer-maxlength-input-prompt");
const Square = require ("./lib/square")
const Circle = require ("./lib/circle")
const Triangle = require ("./lib/triangle")

inquirer.registerPrompt("maxlength-input", MaxLengthInputPrompt);

const questions = () => inquirer.prompt([
    {
        name: "text",
        type: "maxlength-input",
        message: "Please enter up to 3 characters",
        maxLength: 3,
    },
    {
        name: "textColor",
        type: "list",
        message: "Please choose a text color",
        choices: ["red", "purple", "green", "blue", "white"]
    },
    {
        name: "shape",
        type: "list",
        message: "Please choose a shape",
        choices: ["circle", "triangle", "square"]
    },
    {
        name: "shapeColor",
        type: "list",
        message: "Please choose a shape color",
        choices: ["red", "pink", "orange", "blue", "white"]
    },
])
.then(( { text, textColor, shape, shapeColor} ) => {
    let generatedShape;
    if (shape === "square") {
        generatedShape = new Square(text, textColor, shape, shapeColor);
    } else if (shape === "circle") {
        generatedShape = new Circle(text, textColor, shape, shapeColor);
    } else {
        generatedShape = new Triangle(text, textColor, shape, shapeColor);
    }
    fs.writeFileSync("logo.svg", generatedShape.render());
    console.log("Generated logo.svg");
})

questions();