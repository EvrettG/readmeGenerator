// Used for any section that has a return to top feature
const backToTop =   '<div style="text-align: right;"><sup><a href="#table-of-contents">Table of contents</a></sup> </div>'
// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  } else {
    return `![License: GPL v3](https://img.shields.io/badge/License-${license.replace(/-/g, "_")}-blue.svg)`
  }
}
// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  } else {
    return `(https://opensource.org/licenses/${license})`
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log(license)
  if (!license) {
    return "";
  } else {
    return `## License\n
This project is licensed under the [${license}]${renderLicenseLink(license)} [${renderLicenseBadge(license)}]${renderLicenseLink(license)}`
  }
}
// Function to render technologies used or removes section if blank
function techRender(technologies){
  if(!technologies){
    return "";
  } else {
    return`## Technologies used
${backToTop}
${technologies}`
  }
}
// Placeholder text for a blank entry on contributing
function contributeRender(contributing){
  if(!contributing){
    return`Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

  If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
    
  - Fork the Project
  - Create your Feature Branch (git checkout -b feature/AmazingFeature)
  - Commit your Changes (git commit -m 'Add some AmazingFeature')
  - Push to the Branch (git push origin feature/AmazingFeature)
  - Open a Pull Request`
  } else {
    return `${contributing}`
  } 
}
// Function to render if any updates are planed or removes section if blank
function updateRender(updates){
  if(!updates){
    return "";
  } else {
    return`## Future updates
${backToTop}
${updates}`
  }
}
// Function to render if there are any credit's to be given or removes section if blank
function creditRender(credits){
  if(!credits){
    return "";
  } else {
    return`## Credits
${backToTop}
${credits}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // The following atributes are for optional sections of the README.md that may not be used or for any that have placeholder text for a blank entry 
  const {contributing, technologies, updates, credits, license} = data
  let techText =  "";
  let updateText = "";
  let creditText = "";
  let licenseText = "";
  // If statements that remove unused section from table of contents
  if(technologies !== ""){
    techText = "- [Technologies Used and/or Depedencies](#technologies-used-and/or-depedencies)"
  }
  if(updates !== ""){
    updateText = "- [Future updates](#future-updates)"
  }
  if(credits !== ""){
    creditText = "- [Credits](#credits)"
  }   
  if (license !== ""){
    licenseText = "- [License](#license)"
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
  ${updateText}
  - [Questions](#questions)
  ${creditText}
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
  ${contributeRender(contributing)}


  ## Tests
  ${backToTop}
  ${data.tests}


  ${techRender(technologies)}


  ${updateRender(updates)}


  ## Questions
  ${backToTop}

  Please direct any and all questions to [${data.gitname}](https://github.com/${data.gitname}) or email at  [${data.eMail}](${data.eMail})


  ${creditRender(credits)}


  ${renderLicenseSection(license)}`;
}

module.exports = generateMarkdown;
