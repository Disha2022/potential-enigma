// packages needed for this application
var inquirer = require("inquirer");
var fs = require("fs");

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
    choices: ["ISC", "MIT", "Apache"],
  },
  {
    type: "input",
    name: "user",
    message: "What is your github username?",
    default: "Disha2022"
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
  let content = "# " + data.title + "\n\n";

  let licenseImg = "![license badge ";
  if (data.license === "MIT") {
    licenseImg += 'MIT](https://img.shields.io/badge/license-MIT-green "MIT")';
  }
  if (data.license === "ISC") {
    licenseImg += 'ISC](https://img.shields.io/badge/license-ISC-green "ISC")';
  }
  if (data.license === "Apache") {
    licenseImg +=
      'Apache](https://img.shields.io/badge/license-Apache-blue "Apache")';
  }

  content += licenseImg + "\n\n";

  content += "## Description\n\n" + data.description + "\n\n";

  content +=
    "## Table of Contents\n\n" +
    `- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)` +
    "\n\n";

  content += "## Installation\n\n" + data.installation + "\n\n";
  content += "## Usage\n\n" + data.usage + "\n\n";
  content += "## Credits\n\n" + data.contributing + "\n\n";
  content += "## Tests\n\n" + data.test + "\n\n";

  content +=
    "## License\n\n" +
    "This application is covered under the " +
    data.license +
    " license." +
    "\n\n";

  content += "## Questions\n\n" + `[My Github Profile](https://github.com/${data.user})` + "\n\n";
  content += "If you have additional questions, I can be reached at " + data.email + "\n";

  fs.writeFile(fileName, content, (err) => {
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
