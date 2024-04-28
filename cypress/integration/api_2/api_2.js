const {Given, When, Then, Datatable} = require("@badeball/cypress-cucumber-preprocessor");
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

When(/^I update the user with the following data:$/, function (datatable) {
    const dat = datatable.hashes().pop()
    newUserName = dat.name
    email = dat.email.replace('[timestamp]', Date.now())
    cy.log('EEEEEEEMAAAILLL' + email)
    cy.request({
        method: 'PATCH',
        url: `https://gorest.co.in/public/v1/users/${users[0].id}`,
        headers: {
            'Authorization': dat.authorization,
            'Content-Type': 'application/json'
        },
        body: {
            "name": dat.name,
            "email": email,
            "status": dat.status
        }
    }).then((response) => {
        lastResponse = Object.create(response);
    })
});
Then(/^the user has been updated$/, function () {
    expect(lastResponse.body.data.name).to.equal(newUserName)
    expect(lastResponse.status).to.equal(200);
});