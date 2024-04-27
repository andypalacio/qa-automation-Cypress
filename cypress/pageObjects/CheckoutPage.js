import {BasePage} from "./BasePage";

export class CheckoutPage extends BasePage {
    constructor() {
        super();
    }

    completeShippingFields(datatable) {
        datatable.hashes().forEach((element) => {
            cy.get('[data-testid="email-field"]').type(element.email, {delay: 0});
            cy.get('[data-testid="first-name-shipping-field"]').type(element.firstName, {delay: 0});
            cy.get('[data-testid="last-name-shipping-field"]').type(element.lastName, {delay: 0});
            cy.get('[data-testid="address-shipping-field"]').type(element.address, {delay: 0});
            cy.get('[data-testid="apt-shipping-field"]').type(element.aptSuite, {delay: 0});
            cy.get('[data-testid="country-field"]').click();
            cy.get('.css-cnpfpg > .css-n30o2w').contains(element.country).click();
            cy.get('[data-testid="zipcode-shipping-field"]').type(element.postalCode, {delay: 0});
            cy.get('[data-testid="state-field"]').click();
            cy.get('.css-cnpfpg > .css-n30o2w').contains(element.state).click();
            // given the city field is automatically filled I'm not executing these lines, but for the challenge purposes I leave the way I'd do it
            // cy.get('[data-testid="city-shipping-field"]').clear();
            // cy.get('[data-testid="city-shipping-field"]').type(element.city, {delay: 0});
            cy.get('[data-testid="phone-shipping-field"]').type(element.phone, {delay: 0});

        })
    }
}