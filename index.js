const inquirer = require("inquirer");

inquirer.prompt(
    [
        {
            type: "input",
            name: "title",
            message: "Please enter the name of your project:"
        }
    ]
).then(response =>
{
    console.log(response);
})
