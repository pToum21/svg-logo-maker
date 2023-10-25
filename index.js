const inquirer = require('inquirer')
const shapes = require('./lib/shapes')
const fs = require('fs')


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
        name: 'shape',
        message: 'Select thee shape you want your logo to be: ',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'logoColor',
        message: 'Select a color you want your shape to be: '
    },

]

const application = () => {
    inquirer.prompt(questions).then(answers => {

        // write an if satment for what shape they picked 

        fs.writeFileSync("examples/logo.svg", shapes(answers))
        console.log("Generated logo.svg")
    }
    ).catch(error=> {
        console.log(error.message)
    })
}
    application();