const inquirer = require("inquirer");

inquirer.prompt(
    [
        {
            type: "input",
            name: "title",
            message: "Please enter the name of your project:"
        },
        {
            type: "input",
            name: "description",
            message: "Enter a brief description of your project:"
        },
        {
            type: "input",
            name: "installInstructions",
            message: "Enter brief installation instructions for your project:"
        },
        {
            type: "input",
            name: "usageInstructions",
            message: "Enter usage instructions for your project:"
        },
        {
            type: "input",
            name: "contributeGuildelines",
            message: "Enter contribution guidelines for your project:"
        },
        {
            type: "input",
            name: "testInstructions",
            message: "Enter instructions for testing your project:"
        },
        {
            type: "list",
            name: "license",
            message: "Enter a license for testing your project:",
            choices: ["Apache 2.0", "CC0", "Eclipse Public 1.0", "ISC", "MIT", "Mozilla Public 2.0", "The Unlicense"]
        },
        {
            type: "input",
            name: "githubUseranme",
            message: "Enter your GitHub username:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter your preferred email address:"
        }
    ]
).then(response =>
{
    let readme = generateReadme(response);
    console.log(readme);
})

function generateReadme(data)
{
    // Unpack data fields
    const {title, description, installInstructions, usageInstructions, contributeGuildelines, testInstructions, license, githubUseranme, email} = data;

    return `# ${title}

${getLicenseBadge(license)}

## Description

${description}


## Tabe of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution Guidelines](#contribution-guidelines)
* [Testing](#testing)
* [Questions](#questions)


## Installation

${installInstructions}


## Usage

${usageInstructions}


## License

Licensed under ${getLicenseLongName(license)}.


## Contribution Guidelines

${contributeGuildelines}


## Testing

${testInstructions}


## Questions

* [My GitHub Profile](${githubUseranme})
* [My email address](${email})`;
}

function getLicenseBadge(license)
{
    switch (license) {
        case "Apache 2.0":
            return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        case "CC0":
            return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
        case "Eclipse Public 1.0":
            return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
        case "ISC":
            return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
        case "MIT":
            return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        case "Mozilla Public 2.0":
            return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
        case "The Unlicense":
            return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
    }
}

function getLicenseLongName(license)
{
    switch (license) {
        case "Apache 2.0":
            return "the Apache 2.0 License";
        case "CC0":
            return "the CC0 License";
        case "Eclipse Public 1.0":
            return "the Eclipse Public License 1.0";
        case "ISC":
            return "the ISC License";
        case "MIT":
            return "the MIT License";
        case "Mozilla Public 2.0":
            return "the Mozilla Public License 2.0";
        case "The Unlicense":
            return "The Unlicense";
    }
}
