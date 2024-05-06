// packages that need to be installed
const inquirer = require('inquirer');
const colors = require('colors');
// Importing the generate markdown from utils
const generateMarkdown = require("./utils/generateMarkdown");
// Imports the file system from node js to allow for reading and writing to files
const fs = require('fs');
const { default: Choices } = require('inquirer/lib/objects/choices');
// TODO: Filename path to be changed later, possibly replace with "${input path here!}/README" to allow for cutom file path to save readme
const fileName = "./utils/README.md"
// Checks if README.md already exists
function fileExists(fileName) {
    try {
      fs.accessSync(fileName, fs.constants.F_OK);
      return true;
    } catch (err) {
      return false;
    }
  }



// this is an array of questions for inquire to process
const questions = [
    {
        type: 'input',
        message: colors.brightRed('What is the title of your project?'),
        name: 'title',
        // used to ensure input is valid
        validate:  (title) => {
            if (!title){
                return "You must enter a title";
            } else {
                return true;
            }    
        },
        filter: (title) => {
            return title.trim();
        }
    },
    {
        type: 'input',
        message: colors.blue('Please write a description of you project or leave blank and add after the readme is generated'),
        name: 'description'
    },
    {
        type: 'input',
        message: colors.blue('Please write instalation instructions for your project or leave blank and add after the readme is generated'),
        name: 'instalation'
    },
    {
        type: 'input',
        message: colors.blue('Please write how to use this project or leave blank and add after the readme is generated'),
        name: 'usage'
    },
    {
        type: 'input',
        message: colors.blue('Please write how to contribute to this project or leave blank and basic contributing test will be inserted'),
        name: 'contributing'
    },
    {
        type: 'input',
        // check on what tests acctully mean
        message: colors.blue('Please write how to tests this project or leave blank and add after the readme is generated'),
        name: 'tests'
    },
    {
        type: 'input',
        message: colors.brightGreen('Please write what technologies this project used or leave blank and this section will be removed'),
        name: 'technologies'
    },
    {
        type: 'input',
        message: colors.brightGreen('Please write what updates you are planing for this project or leave blank and this section will be removed'),
        name: 'updates'
    },
    // TODO: After grading remove this section and update generate markdown with own personal details to avoid redoint this question
    {
        type: 'input',
        message: colors.brightRed('What your username on git hub?'),
        name: 'gitname',
        validate:  (gitname) => {
            if (!gitname){
                return "You must enter a git hub username";
            } else {
                return true;
            }    
        },
        filter: (gitname) => {
            return gitname.trim();
        }
    },
    {
        type: 'input',
        message: colors.brightRed('What your e-mail adress?'),
        name: 'eMail',
        validate:  (eMail) => {
            if (!eMail){
                return "You must enter an e-mail adress";
            } else {
                return true;
            }    
        },
        filter: (eMail) => {
            return eMail.trim();
        }
    },
    {
        type: 'input',
        message: colors.brightGreen('Please write anyone or thing you would like to credit for this project or leave blank and this section will be removed'),
        name: 'credits'
    },
    {
        type: 'list',
        message: colors.brightGreen('Please Select a license, select the top for no license'),
        name: "license",
        choices: ["", "MIT", "Apache-2.0", "GPL-3.0", "BSD-3-Clause"],
    }
];

// Function that write's README file
function writeToFile(data) {
    fs.writeFile(fileName, data, (err) =>
  err ? console.error(err) : console.log('README.md successfully made!')
);
}

// Function that initialize's the app
// this one has to pull any and all other functions that we want to run
function init() {
    if (fileExists(fileName)) {
        console.log(colors.magenta('README.MD Already exists. Please move README.md in the utils folder or it will be overwritten'));
      } 
    // Instructions for using the program
    console.log("Please Follow the prompts to create a README.md 1st draft for your project.");
    console.log(`Note: Any questions in ${colors.brightRed("red")} are mandatory and may not be skipped`);
    console.log(`Any questions in ${colors.brightGreen("green")} will remove their section if left blank`)
    console.log("Please note that this program is designed to create a new README.md and that if you have already commited large amounts of text to your README.md");
    console.log("it is advised that you edit the existing README.md");
    // TODO: Add function that checks if README.md already exists and cancels program with request to move file
    console.log(colors.bgGreen("Ensure that no README.md is in the utils folder or it will be overwritten"));
    inquirer.prompt(questions).then((data) =>
    writeToFile(generateMarkdown(data))
    )
}

// Function call to initialize app
// that means we run this function to start everything running
init();
