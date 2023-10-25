const { Circle, Square, Triangle } = require("./shapes")
const SVG = require("./svg")

const makeLogo = ({ text, textColor, shape, shapeColor}) => {
    const svg = new SVG;

    if (shape === 'Square'){
        shape1 = new Square();
    } else if (shape === 'Triangle') {
        shape1 = new Triangle();
    }else {
        shape1 = new Circle();
    }
    shape.setColor(shapeColor);
    svg.setText(textColor, text);
    svg.setShape(shape)

    return svg.render()
    
}

module.exports = makeLogo;