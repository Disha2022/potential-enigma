// packages needed for this application
var inquirer = require("inquirer");
var fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user input. follows structure needed for inquirer
const questions = [
  {
    // inquirer looks for specific types
    type: "input",
    // this name becomes variable to grab user's input later
    name: "title",
    message: "What's your project title?",
    default: "test-project",
  },
  {
    type: "input",
    name: "description",
    message: "What's your project description?",
    default:
      "Provide a short description explaining the what, why, and how of your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "What's your project installation steps?",
    default: "npm install",
  },
  {
    type: "input",
    name: "usage",
    message: "What's your project usage steps?",
    default: "node index.js",
  },
  {
    type: "input",
    name: "contributing",
    message: "What's your project contribution guidelines?",
    default: "[Contributor Covenant](https://www.contributor-covenant.org/)",
  },
  {
    type: "input",
    name: "test",
    message: "What's your project test steps?",
    default: "npm test",
  },
  {
    type: "list",
    name: "license",
    message: "What license does your project use?",
    choices: ["MIT", "Apache", "No License"],
  },
  {
    type: "input",
    name: "user",
    message: "What is your github username?",
    default: "Disha2022"
  },
  {
    type: "input",
    name: "name",
    message: "What is your name?",
    default: "John Smith"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
    default: "test-user@aol.com"
  },
];

// writes the README file
function writeToFile(fileName, data) {
  const content = generateMarkdown(data);

  fs.writeFileSync(fileName, content, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    //file written successfully
  });
  console.log('README.md created');
}

// function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      // console.log(answers);
      writeToFile("README.md", answers);
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
