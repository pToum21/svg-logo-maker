const inquirer = require('inquirer')
const { Circle, Square, Triangle } = require("./lib/shapes")
const fs = require('fs')
let SVG = require('./lib/svg')

// inquirer questions
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

// this allows the inquirer to write a file which is the svg file to the fs to give us the logo
const application = () => {
    inquirer.prompt(questions).then(answers => {
        console.log(answers)
        let shape;
        if (answers.shapeChoice === 'square') {
            shape = new Square();
        } else if (answers.shapeChoice === 'triangle') {
            shape = new Triangle();
        }
        else {
            shape = new Circle();
        }
        shape.setColor(answers.shapeColor);
        const svg = new SVG;
        svg.setText(answers.textColor, answers.text);
        svg.setShape(shape)
        const logo = svg.render()
        fs.writeFile('examples/logo.svg', logo, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    }
    )


}
application()