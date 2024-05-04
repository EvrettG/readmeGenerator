// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  } else {
    return `[![License: GPL v3](https://img.shields.io/badge/License-${license}-blue.svg)]`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  } else {
    return `(https://opensource.org/licenses/${license})`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log(license)
  if (!license) {
    return ``;
  } else {
    return `This project is licensed under the [${license}]${renderLicenseLink(license)} ${renderLicenseBadge(license)}${renderLicenseLink(license)}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let license = data.license;
  return `# ${data.title}
 ${renderLicenseSection(license)}
`;
}

module.exports = generateMarkdown;
