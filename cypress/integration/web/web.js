const {Given, When, Then} = require( "@badeball/cypress-cucumber-preprocessor")
const {HomePage} = require("../../pageObjects/HomePage");
const {possiblePages, possibleButtons} = require("../../helpers/helper");
const {BestSellersPage} = require("../../pageObjects/BestSellersPage");
const page = new HomePage();
const bestSellerPage = new BestSellersPage()

Given(/^the user navigates to ([^"]*)$/, (expectedPage) => {

});

When(/^the user enters the first product within the section "([^"]*)"\.$/, (section) => {

});

When(/^the user clicks on the “([^"]*)” button and proceed to checkout from the cart\.$/, (caption) => {

});

When(/^the user completes email data and shipping Address data with the following information:$/, () => {

});

When(/^the user completes credit card data with the following information:$/, () => {

});

Then(/^the shipping method "Standard Delivery \(4\-8 business days\)" is displayed$/, () => {

});

Then(/^the message "([^"]*)" within Payment Information section is not displayed$/, () => {

});

Then(/^the URL contains "\/hc\/checkout\/"$/, () => {

});