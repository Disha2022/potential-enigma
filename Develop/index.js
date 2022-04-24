// TODO: Include packages needed for this application
var inquirer = require("inquirer");
var fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
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
    default: "https://coding-boot-camp.github.io/full-stack/",
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
    choices: ["Large", "Medium", "Small"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  let content = "# " + data.title + "\n\n";

  content += "## Description\n\n" + data.description + "\n\n";
  
  content += "## Table of Contents\n\n" + 
  `- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Tests](#tests)
- [License](#license)` + "\n\n";

  content += "## Installation\n\n" + data.installation + "\n\n";
  content += "## Usage\n\n" + data.usage + "\n\n";
  content += "## Credits\n\n" + data.contributing + "\n\n";
  content += "## Tests\n\n" + data.tests + "\n\n";


  content += "## License\n\n" + data.license + "\n\n";

  fs.writeFile(fileName, content, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    //file written successfully
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(answers);
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
