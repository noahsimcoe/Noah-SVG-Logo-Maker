const Square = require("../square")
const Circle = require("../circle")
const Triangle = require("../triangle")

describe("Shape Tests", () => {
    describe("Square", () => {
        it("The shape is a square and is the color blue", () => {
            const generated = "square, blue";
            const shape = new Square("nts", "white", "square", "blue");
            expect(shape.renderSpecs()).toEqual(generated)
        })
    })
    describe("Circle", () => {
        it("The shape is a circle and is the color red", () => {
            const generated = "circle, red";
            const shape = new Circle("qqq", "yellow", "circle", "red");
            expect(shape.renderSpecs()).toEqual(generated)
        })
    })
    describe("Triangle", () => {
        it("The shape is a triangle and is the color green", () => {
            const generated = "triangle, green";
            const shape = new Triangle("mjl", "red", "triangle", "green");
            expect(shape.renderSpecs()).toEqual(generated)
        })
    })
})
