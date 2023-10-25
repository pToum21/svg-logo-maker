class SVG {
    constructor() {
        this.textElement = ""
        this.shapeElement = ""
    }

    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`;
    }

    setText(text, textColor) {
        if(message.length > 3){
            throw new Error('Text can only be 3 Characters or less')
        }
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`
    }

    setShape(shape) {
        this.shapeElement = shape.render();
    }
}

module.exports = SVG