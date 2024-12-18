// Imports
import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import generateMarkdown from './utils/generateMarkdown.js';

// Get directory name, current file, ES6 workaround __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
const writeToFile = (directory, fileName, data) => {
  fs.mkdirSync(directory, { recursive: true });
  const filePath = path.join(directory, fileName);

  
  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log(`README file successfully generated at ${filePath}`);
    }
  });
};

// Function to initialize the app
const init = async () => {
  try {
    const answers = await inquirer.prompt(questions);
    const markdownContent = generateMarkdown(answers);

    // Define output directory
    const outputDir = path.join(__dirname, 'dist');

    // Write the README file to specified directory
    writeToFile(outputDir, 'README.md', markdownContent);
  } catch (error) {
    console.error('Error initializing app:', error);
  }
};

// Call to initialize the app
init();