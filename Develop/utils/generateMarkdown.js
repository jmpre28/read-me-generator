
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT License') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;

  } else if (license === 'Apache 2.0') {
    return  `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;

  } else if (license === 'Mozilla 2.0') {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`   ;

  } else {
    return '';
  };
};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT License') {
    return `https://opensource.org/license/mit/`

  } else if (license === 'Apache 2.0') {
    return  `https://www.apache.org/licenses/LICENSE-2.0`

  } else if (license === 'GNU v3.0') {
    return `https://www.gnu.org/licenses/gpl-3.0.en.html`

  } else if (license === 'Mozilla 2.0') {
    return `https://www.mozilla.org/en-US/MPL/2.0/`   
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT License') {
    return `This project is icensed under the MIT license. [Read more about this license here.](${renderLicenseLink(license)})`;

  } else if (license === 'Apache 2.0') {
    return  `This project is licensed under Apache 2.0 license. [Read more about this license here.](${renderLicenseLink(license)})`;

  } else if (license === 'GNU v3.0') {
    return `This project is licensed under GNU v3.0 license. [Read more about this license here.](${renderLicenseLink(license)})`;

  } else if (license === 'Mozilla 2.0') {
    return `This project is licensed under Mozilla 2.0 license. [Read more about this license here.](${renderLicenseLink(license)})`;   
  } else {
    return ''
  };
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} - ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Licensing](#licensing)
  - [Contributions](#contributions)
  - [Testing](#testing)
  - [Questions](#questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Licensing
  ${renderLicenseSection(data.license)}

  ## Testing
  ${data.testing}

  ## Contributions
  ${data.contribution}

  ## Questions
  Should you have any questions regarding this project, contact me via email at ${data.email}.
  You can also find me on GitHub at https://github.com/${data.github}.
`;
};

module.exports = generateMarkdown;
