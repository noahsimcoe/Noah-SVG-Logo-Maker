const fs = require("fs");
const inquirer = require("inquirer");
const MaxLengthInputPrompt = require("inquirer-maxlength-input-prompt");
const Shapes = require ("./lib/shapes")
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
        message: "Please choose a color",
        choices: ["red", "yellow", "green", "blue", "white"]
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
        message: "Please choose a color",
        choices: ["red", "yellow", "green", "blue", "white"]
    },
])
.then((res) => {
    const shape1 = new Square(res.text, res.textColor, res.shape, res.shapeColor);
    shape1.printData();
    shape1.render();
})

questions();