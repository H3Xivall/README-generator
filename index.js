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
];

inquirer.prompt(questions).then((answer) => {
    const readMeContent = `
# ${answer.title}

${badge(answer.license)}

## Description
${answer.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Test](#test)
* [License](#license)
* [Questions](#questions)

## Installation
${answer.installation}

## Usage
${answer.usage}

## Contribution
${answer.contribution}

## Test
${answer.test}

## License
${answer.license}

## Questions
GitHub: [${answer.github}](https://github.com/${answer.github})

Email: [${answer.email}](mailto:${answer.email})

    `;
    fs.writeFile('GeneratedREADME.md', readMeContent, (err) => {
        if (err) {
            console.log("Issues with created README file");
        } else {
            console.log("README file successfully created!");
        };
    });
});

function badge(license) {
    if (license === 'MIT') {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else if (license === 'GNU GPLv3') {
        return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
    } else if (license === 'Apache 2.0') {
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    } else if (license === 'ISC') {
        return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
    } else {
        return ``
    };
};