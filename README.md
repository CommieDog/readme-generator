# Readme Generator
A simple Node.js application for generating readme files


## Introduction
The Readme Generator is a simple tool to automate the process of generating readme documentation for coding projects. It is a Node.js command-line application that prompts the user for a few simple inputs and uses them to generate a readme file.

![Screencap of Weather Companion showing typical use case.](https://github.com/CommieDog/weather-companion/blob/main/assets/images/readme/weather-companion-screencap.gif)

A sample deployment of the website is available on [GitHub Pages](https://commiedog.github.io/weather-companion/).


## Table of Contents

* [Usage](#usage)
* [Features](#features)
* [Technologies Used](#technologies-used)
* [Future Work](#future-work)
* [Author](#author)
* [License](#license)


## Usage

The Readme Generator starts by prompting the user for information about the project. Most of the prompts are simple text responses; only the license prompt is more complex, asking the user to choose a license from a list. Upon entering all the data, the Readme Generator writes a GENERATED.md file to the directory where the Readme Generator is installed, creating a Markdown-formated readme with all of the common sections and a table of contents to navigate them.


## Features

* Basic command line interface
* Several common licenses to choose from
* Common readme sections
* Use of licence badges
* Table of contents


## Technologies Used

* JavaScript
  * Inquirer.js
* Node.js


## Future Work

The feature I would most like to add is the ability to skip the generation of certain sections by skipping the relevant prompt. That would allow for the addition of less commonly used readme sections to the application.


## Author

John Netzel
* [Portfolio](https://commiedog.github.io/my-portfolio/)
* [LinkedIn](https://www.linkedin.com/in/john-netzel-481112129/)
* [GitHub](https://github.com/CommieDog)

## License
&copy; 2022 John Netzel. All Rights Reserved. Licenced under the terms of the MIT License.
