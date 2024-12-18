// Description: This file contains the questions that will be asked to the user when they run the application.
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