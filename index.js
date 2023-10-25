const inquirer = require('inquirer')
const shapes = require('./lib/shapes')
const fs = require('fs')
// const makeLogo = require('./lib/makelogo')
const { Circle, Square, Triangle } = require("./lib/shapes")
const SVG = require("./lib/svg")



const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter three characters you want to include in your logo, you can think of these as a three letter abbreviation: '
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Select a color you want your Three letter abbreviation to be: '
    },
    {
        type: 'list',
        name: 'shapeChoice',
        message: 'Select thee shape you want your logo to be: ',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Select a color you want your shape to be: '
    },

]

const application = () => {
    inquirer.prompt(questions).then(answers => {

        // write an if satment for what shape they picked 
        const makeLogo = ({ text, textColor, shape, shapeColor}) => {
            const svg = new SVG;
        
            if (shapeChoice === 'Square'){
                shape = new Square();
            } else if (shapeChoice === 'Triangle') {
                shape = new Triangle();
            }else {
                shape = new Circle();
            }
            shape.setColor(shapeColor);
            svg.setText(textColor, text);
            svg.setShape(shape)
        
            return svg.render()
            
        }
        fs.writeFileSync("examples/logo.svg", shapes(makeLogo))
        console.log("Generated logo.svg")
    }
    ).catch(error=> {
        console.log(error.message)
    })
}
    application();