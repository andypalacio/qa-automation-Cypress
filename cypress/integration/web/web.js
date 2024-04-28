const {Given, When, Then, DataTable} = require( "@badeball/cypress-cucumber-preprocessor")
const {HomePage} = require("../../pageObjects/HomePage");
const {possiblePages, possibleButtons} = require("../../helpers/helper");
const {BestSellersPage} = require("../../pageObjects/BestSellersPage");
const {CheckoutPage} = require("../../pageObjects/CheckoutPage");
const page = new HomePage();
const bestSellerPage = new BestSellersPage();
const checkoutPage = new CheckoutPage();

Cypress.on("uncaught:exception", (err) => {
    // Cypress and React Hydrating the document don't get along
    // for some unknown reason. Hopefully we figure out why eventually
    // so we can remove this.
    return false;

});

Given(/^the user navigates to ([^"]*)$/, (expectedPage) => {
    page.navigateTo(possiblePages[expectedPage]);
    page.closeHomePagePopUp();
});

When(/^the user enters the first product within the section "([^"]*)"$/, (section) => {

    page.visitSection(section);
    bestSellerPage.selectFirstProduct();
});

When(/^the user clicks on the "([^"]*)" button and proceed to checkout from the cart$/, (caption) => {
        page.clickButton(possibleButtons[caption]);
        bestSellerPage.showMyBag();
});

When(/^the user completes email data and shipping Address data with the following information$/, (datatable) => {
    page.clickButton(possibleButtons['proceed to checkout']);
    page.checkURL('checkout.shapermint.com/hc/checkout/');
    checkoutPage.completeShippingFields(datatable);

});

When(/^the user completes credit card data with the following information$/, (datatable) => {
    checkoutPage.completePaymentFields(datatable)
});

Then(/^the shipping method "([^"]*)" is displayed$/, () => {
    checkoutPage.checkShippingMethod();
});

Then(/^the message "([^"]*)" within Payment Information section is displayed$/, (errorMessage) => {
    checkoutPage.checkCreditCardError(errorMessage);
});

Then(/^the URL contains "([^"]*)"$/, (url) => {
    page.checkURL(url);
});