const {Given, When, Then, DataTable} = require("@badeball/cypress-cucumber-preprocessor")
let users = [];
let activeUser = 0;

Given(/^I get the list of users$/, () => {
    cy.request({
        method: 'GET',
        url: 'https://gorest.co.in/public/v1/users',
    }).then((response) => {
        users = Object.assign(response.body.data);
    })
});
When(/^I get the first active user from the list$/, () => {
    for (var i = 0; i < users.length; i++) {
        if (users[i].status === 'active') {
            activeUser = users[1].id;
        }
    }
});
Then(/^I get the folowing details of the user$/, function (datatable) {
    const dat = datatable.hashes().pop()
    cy.request({
        method: 'GET',
        url: `https://gorest.co.in/public/v1/users/${activeUser}`
    }).then((response) => {
        expect(response.body.data.status).to.equal(dat.status)
        expect(response.status).to.equal(parseInt(dat.statusCode));
    })
});