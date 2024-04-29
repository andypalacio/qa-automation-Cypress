# trafilea-challenge-qa-automation

This repository contains the code developed as part of the QA test automation challenge for Trafilea.

## Description

The QA test automation challenge for Trafilea consists of developing a set of automated tests to verify the correct functioning of certain functionalities of a web application and API.

the test created are:

* **web**: Validating that a user cannot complete a payment with an invalid credit card.
* **api_1**: Validating that you can get a user list to get details of an active user
* **api_2**: Validating that a user can be updated from API

## Prerequisites

To run the automated tests, you will need to have the following installed:

- [Node.js](https://nodejs.org/) y npm
- [Cypress](https://www.cypress.io/)
- [Cypress-cucumber-preprocessor](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor)

## Installation

1. Clone the repo

        git clone https://github.com/andypalacio/trafilea-challenge-qa-automation.git

2. Install NPM packages

        npm install
## Usage

### Executing the test cases
You can execute the test cases headed, using the following command

      npx cypress open

Otherwise, you can run them headless using

      npx cypress run

## Contact

* Andres Palacio - andresepalacio@gmail.com
* Project Link: https://github.com/andypalacio/trafilea-challenge-qa-automation
