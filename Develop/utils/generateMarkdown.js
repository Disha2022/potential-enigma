const renderLicenseLink = require("./generateLicense");

// returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "No License") {
    return "";
  }
  let licenseImg = "![license badge ";
  if (license === "MIT") {
    licenseImg += 'MIT](https://img.shields.io/badge/license-MIT-green "MIT")';
  }
  if (license === "Apache") {
    licenseImg +=
      'Apache](https://img.shields.io/badge/license-Apache-blue "Apache")';
  }
  licenseImg + "\n\n";
  return licenseImg;
}

// =returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "No License") {
    return "";
  }
  return (
    "## License\n\n" +
    "This application is covered under the " +
    license +
    " license."
  );
}

// generate markdown for README
function generateMarkdown(data) {
  let content = "# " + data.title + "\n\n";

  content += renderLicenseBadge(data.license);
  content += "## Description\n\n" + data.description + "\n\n";

  content +=
    "## Table of Contents\n\n" +
    `- [Installation](#installation)
- [Usage](#usage)
- [Contributing Guidelines](#contributing-guidelines)
- [Tests](#tests)` +
    "\n" +
    `${data.license === "No License" ? "" : "- [License](#license)\n"}` +
    "- [Questions](#questions)\n\n";

  content += "## Installation\n\n" + data.installation + "\n\n";
  content += "## Usage\n\n" + data.usage + "\n\n";
  content += "## Contributing Guidelines\n\n" + data.contributing + "\n\n";
  content += "## Tests\n\n" + data.test + "\n\n";
  content += renderLicenseSection(data.license);
  content += renderLicenseLink(data.license, data.name);
  content +=
    "## Questions\n\n" +
    `[My Github Profile](https://github.com/${data.user})` +
    "\n\n";
  content +=
    "If you have additional questions, I can be reached at " +
    data.email +
    "\n";
  return content;
}

module.exports = generateMarkdown;
