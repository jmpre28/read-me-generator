const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Briefly describe your project.'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please list installation instructions for this project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the intended use of this project?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'List any contributors/contributions to this project.'
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Please describe any testing instructions for this project.'
    },
    {
        type: 'input',
        name: 'license',
        message: 'Choose a license for this project. If no license is needed, enter "None".',
        license_list: [
            'Apache 2.0',
            'MIT',
            'Unlicense',
            'EPL 1.0',
            'GPLv3',
            'MPL 2.0',
            'None'
        ]
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your preferred email address.'
    }
];

function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            fs.writeFile('./testing/README.md', generateMarkdown(data), (err) =>
            err ? console.log(err) : console.log('README.md file has successfully been created.'))
        });
};

init();
