const inquirer = require('inquirer');
const fs = require('fs');
const emailValidator = require('email-validator');

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
        // validate: emailValidator
    }
])
.then((answer) => {
    fs.writeFile('readIt.md', 
`
# ${answer.title}  
${licenseGenerator(answer.license)}  
## Table Of Contents  
- [Description](#Description)  
- [Installation Instructions](#InstallationInstructions)  
- [Usage Information](#UsageInformation)  
- [Contribution Guidelines](#ContributionGuidelines)  
- [Testing](#Testing)  
- [Questions](#Questions)  
## Description  
${answer.description}  
## Installation Instructions  
${answer.installation}  
## Usage Information  
${answer.usage}  
## Contribution Guidelines  
${answer.contribution}  
## Testing  
${answer.test}  
## Questions  
Reach out to me on GitHub at ${answer.github} or by email at ${answer.email}  
`
, 
    
    (err) => err? console.log(err) : console.log('Success'));
})
.catch((error) => {
    console.log(error)
});

