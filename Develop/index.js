// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
  type: 'input',
  name: 'title',
  message: "What's your project title?",
  validate(value) {
    const pass = value;
    if (pass) {
      return true;
    }

    return 'Please enter a project title';
  },
},];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const content = data.title;
  fs.writeFile(fileName, content, err => {
    if (err) {
      console.error(err)
      return
    }
    //file written successfully
  })
}

// TODO: Create a function to initialize app
function init() {

  inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(answers)
    writeToFile("README.md", answers)
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

}

// Function call to initialize app
init();
