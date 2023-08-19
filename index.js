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
        message: "Please choose a shape color",
        choices: ["red", "yellow", "green", "blue", "white"]
    },
])
.then((res) => {
    if (res.shape === "square") {
        const square = new Square(res.text, res.textColor, res.shape, res.shapeColor);
        fs.writeFileSync("./examples/square.svg", square.renderShape(res));
        console.log("Success! Your Square.svg file has been written");
    } else if (res.shape === "circle") {
        const circle = new Circle(res.text, res.textColor, res.shape, res.shapeColor);
        fs.writeFileSync("./examples/circle.svg", circle.renderShape(res));
        console.log("Success! Your circle.svg file has been written");
    } else {
        const triangle = new Triangle(res.text, res.textColor, res.shape, res.shapeColor);
        fs.writeFileSync("./examples/triangle.svg", triangle.renderShape(res));
        console.log("Success! Your triangle.svg file has been written");
    }
})

questions();