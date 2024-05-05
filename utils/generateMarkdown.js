// Used for any section that has a return to top feature
const backToTop =   '<div style="text-align: right;"><sup><a href="#table-of-contents">Table of contents</a></sup> </div>'
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  } else {
    return `![License: GPL v3](https://img.shields.io/badge/License-${license.replace(/-/g, "_")}-blue.svg)`
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
    return `## License\n
This project is licensed under the [${license}]${renderLicenseLink(license)} [${renderLicenseBadge(license)}]${renderLicenseLink(license)}`
  }
}
// TODO: Add function to render tech or nothing if unused
function techRender(technologies){
  console.log(technologies)
  if(!technologies){
    return "";
  } else {
    return`## Technologies used
${backToTop}
${technologies}`
  }
}

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

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {contributing, technologies, updates, credits} = data
  console.log(technologies)
  let license = data.license;
  let techText =  "";
  let updateText = "";
  let creditText = "";
  let licenseText = "";
  if (license !== ""){
    licenseText = "- [License](#license)"
  }
  if(technologies !== ""){
    techText = "- [Technologies Used and/or Depedencies](#technologies-used-and/or-depedencies)"
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
  ${contributeRender(contributing)}


  ## Tests
  ${backToTop}
  ${data.tests}


  ${techRender(technologies)}


  ## Future updates
  ${backToTop}
  ${data.updates}


  ## Questions
  ${backToTop}

  Please direct any and all questions to [${data.gitname}](https://github.com/${data.gitname}) or email at  [${data.eMail}](${data.eMail})


  ## Credits
  ${backToTop}
  ${data.credits}


 ${renderLicenseSection(license)}
`;
}

module.exports = generateMarkdown;
