import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// Array of questions for user input
const questions = [
  { type: 'input', name: 'title', message: 'Enter the title of the project:' },
  { type: 'input', name: 'description', message: 'Add a description of the project:' },
  { type: 'input', name: 'installation', message: 'Include the steps to install the project:' },
  { type: 'input', name: 'usage', message: 'Explain the intended use of the project:' },
  { type: 'list', name: 'license', message: 'Choose a license:', choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'] },
  { type: 'input', name: 'contributing', message: 'How can others contribute to the project?' },
  { type: 'input', name: 'tests', message: 'List examples showing how to run tests for the project:' },
  { type: 'input', name: 'github', message: 'Enter your GitHub username:' },
  { type: 'input', name: 'email', message: 'Provide an email for questions:' },
];

// Function to write the README file
const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('README file successfully generated!');
    }
  });
};

// Function to initialize the app
const init = async () => {
  try {
    const answers = await inquirer.prompt(questions);
    const markdownContent = generateMarkdown(answers);
    writeToFile('README.md', markdownContent);
  } catch (error) {
    console.error('Error initializing app:', error);
  }
};

// Call to initialize the app
init();