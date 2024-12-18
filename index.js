// TODO: Include packages needed for this application
import inquirer from 'inquirer';
const inquirer = require('inquirer');
const fs = require('fs');
// const generateMarkdown = require('./utils/generateMarkdown');
import generateMarkdown from './utils/generateMarkdown';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter title of the project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Add description of project here:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Include the steps to install the project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Explain intended use of project?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license:',
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to the project?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'List examples showing how to run tests for the project:',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Provide an email for questions?',
      }
    ];
    
    module.exports = questions;


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
        console.error('An error occurred writing file:', err);
    } else {
        console.log('README.md generation a success!');
    }
});
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      const readmeContent = generateMarkdown(answers); // Corrected function reference
      writeToFile('README.md', readmeContent);
    })
    .catch((error) => {
      console.error('Error during initialization:', error);
    });
}

/*
function init() {
  inquirer.prompt(questions)
  .then((answers) => {
      const readmeContent = generateREADME(answers);
      writeToFile('README.md', readmeContent);
  })
  .catch((error) => {
      console.error('Error during initialization:', error);
  });
}
*/

// Function call to initialize app
init();
