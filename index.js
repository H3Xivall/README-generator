// README Generator
// Author: Ryan Hanzel

const inquirer = require('inquirer');
const fs = require('fs');

// array of questions for user

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a project title!');
                return false;
            };
        }
    }, {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project',
    }, {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions for the project',
    }, {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information for the project',
    }, {
        type: 'input',
        name: 'contribution',
        message: 'Provide contribution guidelines for the project',
    }, {
        type: 'input',
        name: 'test',
        message: 'Provide test instructions for the project',
    }, {
        type: 'list',
        name: 'license',
        message: 'Choose a license for the project',
        choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'None']
    }, {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username',
    }, {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
    }
]