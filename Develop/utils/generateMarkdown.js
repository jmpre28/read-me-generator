// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'Apache 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if ()
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ##Description
  ${data.description}

  ##Installation
  ${data.install}

  ##Usage
  ${data.usage}

  ##Licensing
  ${data.license}

  ##Testing
  ${data.testing}

  ##Credits
  ${data.contribution}

  ##Contact Me
  Should you have any questions regarding this project, contact me via email at ${data.email}.
  You can also find me on GitHub at https://github.com/${data.github}.
`;
};

module.exports = generateMarkdown;
