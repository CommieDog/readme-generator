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
            type: "input",
            name: "guthubUseranme",
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
    console.log(response);
})
