// TODO: Include packages needed for this application
// packages that need to be installed
const inquirer = require('inquirer');
const colors = require('colors');
// Importing the generate markdown from utils
const generateMarkdown = require("./utils/generateMarkdown");
// Imports the file system from node js to allow for reading and writing to files
const fs = require('fs');
const { default: Choices } = require('inquirer/lib/objects/choices');
// Filename path to be changed later, possibly replace with "${input path here!}/README" to allow for cutom file path to save readme
const fileName = "./utils/README.md"

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: colors.blue('What is the title of your project?'),
        name: 'title',
        validate:  (title) => {
            if (!title){
                // console.log(colors.red(`You must include a title`));
                return "You must enter a title";
            } else {
                // console.log(colors.green("sucess"));
                return true;
            }    
        },
        filter: (title) => {
            // console.log(colors.green("sucess 2 electric boogaloo"));
            return title.trim();
        }
    },
    // license section, move later
    {
        type: 'list',
        message: colors.blue('Please Select a license, select the top for no license'),
        name: "license",
        choices: ["", "MIT", "Apache-2.0", "GPL-3.0", "BSD-3-Clause"],
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile(fileName, data, (err) =>
  err ? console.error(err) : console.log('Success!')
);
}

// TODO: Create a function to initialize app
// this one has to pull any and all other functions that we want to run
function init() {
    inquirer.prompt(questions).then((data) =>
    writeToFile(generateMarkdown(data))
    )
}

// Function call to initialize app
// that means we run this function to start everything running
init();
