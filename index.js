// Adding required dependencies 
const inquirer = require('inquirer');
const fs = require('fs');

// Function to add license badge to ReadMe
const licenseGenerator = (license) => {
    if (license === 'MIT'){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }
    else if (license === 'WTFPL'){
        return `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`
    }
    else if (license === 'PERL'){
        return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`
    }
    else if (license === `ISC`){
        return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
    }
    else {
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    }
}

// Inquirer prompt
inquirer
.prompt (
    //Questions being asked
    [
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
        choices: ["MIT", "WTFPL", "PERL", "GPLv3", "ISC"]
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
    }
])
// Now writing to ReadMe file
.then((answer) => {
    fs.writeFile('readIt.md', 
`
# ${answer.title}  
${licenseGenerator(answer.license)}  
## Table Of Contents  
- [Description](#description)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Contribution](#contribution)  
- [Testing](#testing)  
- [Questions](#questions)  
## Description  
${answer.description}  
## Installation  
${answer.installation}  
## Usage   
${answer.usage}  
## Contribution    
${answer.contribution}  
## Testing  
${answer.test}  
## Questions  
Reach out to me on GitHub at http://github.com/${answer.github} or by email at ${answer.email}  
`
, 
    //Catching errors
    (err) => err? console.log(err) : console.log('Success'));
})
.catch((error) => {
    console.log(error)
});

