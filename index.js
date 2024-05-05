const inquirer = require('inquirer');
const fs = require('fs');
const emailValidator = require('email-validator');

inquirer
.prompt ([
    {
        name: 'title',
        message: "What is your projects title?",
        type: 'input'
    },
    {
        name: "description",
        message: "Provide us with a brief description of your project",
        type: 'input' 
    },
    {
        name: "installation",
        message: "Please provide your installation instructions",
        type: "input"
    },
    {
        name: "usage",
        message: "Please provide some usage information",
        type: "input"
    },
    {
        name: "contribution",
        message: "Please provide the contribution guidelines",
        type: "input"
    },
    {
        name: "test",
        message: "Please provide your testing instructions",
        type: "input"
    },
    {
        name: "license",
        message: "Please choose your license from below options",
        type: "list",
        choices: ["MIT", "License 2", "License 3", "License 4", "License 5"]
    },
    {
        name: "github",
        message: "Please enter your GitHub username",
        type: "input"
    },
    {
        name: "email",
        message: "Please provide your email address",
        type: "input",
        // validate: emailValidator
    }
])
.then((answer) => {
    fs.writeFile('readIt.md', answer.title, (err) => err? console.log(err) : console.log('Success'));
})
.catch((error) => {
    console.log(error)
});

