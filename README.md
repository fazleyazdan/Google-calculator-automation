you Need to have any sort of IDE to start your automation: I will recommend VSCode

# Cypress Framework 
![Cypress Logo](https://cypress-io.s3.amazonaws.com/static/img/favicon.png)

This repository demonstrates the setup of an end-to-end testing framework using the Cypress framework with Page Object Model

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Custom Commands](#custom-commands-and-step-definitions)
- [Useful Links](#useful-links)
- [Contributing](#contributing)
- [License](#license)

<a id="prerequisites"></a>

## Prerequisites

- Node.js and npm: Ensure that you have Node.js and npm (Node Package Manager) installed on your system.

<a id="installation"></a>

## Installation
After downloading > Goto open project  

3. Install Cypress By running this command

* Windows : npm install cypress
* Mac : sudo npm install cypress

<a id="running-tests"></a>

## Running Tests 
To run the tests with the specified environment, execute the following command:


   **To run tests in UI Mode:** npx cypress open
--After running this command , cypress window will be displayed 
--Select E2E options > Specs files > Select any to run test case.

   **To run all tests in Headless Mode:** npx cypress run
   
   **To run Specific test in Headless Mode:** npx cypress run --spec "relative path of the file"
   
   **Note**: for Mac add 'sudo' to above commands.

#### Generate Reports Using Mochawesome:

* in cypress we can generate html report by installing a package called 'cypress-mochawesome-reporter'
* after installing it we have to do some changes in 'cypress.config.js'. see package info on npm website
* add this: import 'cypress-mochawesome-reporter/register' in e2e.js.
* run any testsuit/test cases on headless mode & the report will be generated for that test cases.

* By running the below command reports will be generated for the test cases.
`npx cypress run --reporter cypress-mochawesome-reporter`

<a id="#project-structure"></a>

## Project Structure

The project follows this structure:

```plaintext
your-cypress-project/
├── cypress/
│   ├── fixtures/
│   ├── e2e/
│   │   ├── Calculator_Button_verification.cy.js
│   ├── plugins/
│   ├── cypress/
│   │   ├── PageObject/
│   │   │   ├── numeric.js
|   |   |   
│   └── ...
├── node_modules/
├── cypress.config.js
├── package.json
└── README.md 
```

- `cypress/e2e/`: This directory contains all the test files.
- `cypress/support/pageObject/`: call your functions from pageObject in this directory.
- `cypress.config.js`: Cypress configuration file.
- `package.json`: Node.js project configuration file.

<a id="configuration"></a>

## Configuration

- `cypress.config.js`: Configure various Cypress options in this file, such as base URL of multiple env, viewport size, test files location, and more.

## Custom Commands

You can create custom commands in the `cypress/support/commands.js` file directory to encapsulate actions or assertions.

<a id="useful-links"></a>

## Useful Links

- [Cypress Documentation](https://docs.cypress.io/)



