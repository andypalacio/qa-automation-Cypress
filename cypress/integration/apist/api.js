const {Given, When, Then, DataTable} = require("@badeball/cypress-cucumber-preprocessor")
let users = [];
let activeUser = 0;
let lastResponse = {}
let newUserName = '';

Given(/^I get the list of users$/, () => {
    cy.request({
        method: 'GET',
        url: 'https://gorest.co.in/public/v1/users',
    }).then((response) => {
        users = Object.assign(response.body.data);
    })
});

