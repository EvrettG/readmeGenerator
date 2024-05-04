// Used for any section that has a return to top feature
const backToTop =   '<div style="text-align: right;"><sup><a href="#table-of-contents">Table of contents</a></sup> </div>'
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
    return "";
  } else {
    return `## License
    This project is licensed under the [${license}]${renderLicenseLink(license)} ${renderLicenseBadge(license)}${renderLicenseLink(license)}`
  }
}
// TODO: Add function to render tech or nothing if unused


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data.technologies)

  let license = data.license;
  let techText = "- [Technologies Used and/or Depedencies](#technologies-used-and/or-depedencies)"
  let updateText = ""
  let creditText = ""
  let licenseText = ""
  if (license !== ""){
    licenseText = "- [License](#license)"
  }
  if(data.technologies == ""){
    techText = - ""
  }

  return `# ${data.title}
  
  ${renderLicenseBadge(license)}

  ## Table of contents
  - [Description](#description)
  - [Instalation instructions](#instalation-instructions)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  ${techText}
  - [Future updates](#future-updates)
  - [Questions](#questions)
  - [Credits](#credits)
  ${licenseText}

  ## Description
  ${backToTop}
  ${data.description}


  ## Instalation  
  ${backToTop}
  ${data.instalation}
  

  ## Usage
  ${backToTop}
  ${data.usage}


  ## Contributing
  ${backToTop}
  ${data.contributing}


  ## Tests
  ${backToTop}
  ${data.tests}


  ## Technologies used
  ${backToTop}
  ${data.technologies}


  ## Future updates
  ${backToTop}
  ${data.updates}


  ## Questions
  ${backToTop}
  Please direct any and all questions to ${data.gitname} at ${data.eMail}


  ## Credits
  ${backToTop}
  ${data.credits}


 ${renderLicenseSection(license)}
`;
}

module.exports = generateMarkdown;
