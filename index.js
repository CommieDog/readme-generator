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

## Description

${description}


## Installation

${installInstructions}


## Usage

${usageInstructions}


## License

${license}


## Contribution Guidelines

${contributeGuildelines}


## Testing

${testInstructions}


## Questions

* [My GitHub Profile](${githubUseranme})
* [My email address](${email})`;
}