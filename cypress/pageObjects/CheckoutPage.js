import {BasePage} from "./BasePage";

export class CheckoutPage extends BasePage {
    constructor() {
        super();
    }

    completeShippingFields(datatable) {
        const elements = datatable.hashes().pop()
        cy.get('[data-testid="email-field"]').type(elements.email, {delay: 0});
        cy.get('[data-testid="first-name-shipping-field"]').type(elements.firstName, {delay: 0});
        cy.get('[data-testid="last-name-shipping-field"]').type(elements.lastName, {delay: 0});
        cy.get('[data-testid="address-shipping-field"]').type(elements.address, {delay: 0});
        cy.get('[data-testid="apt-shipping-field"]').type(elements.aptSuite, {delay: 0});
        // this is by default filled with the required value on the challenge.
        // cy.get('[data-testid="country-field"]').click();
        // cy.get('.css-cnpfpg > .css-n30o2w').contains(elements.country).click();
        cy.get('[data-testid="zipcode-shipping-field"]').type(elements.postalCode, {delay: 0});
        // these fields are automaticaly filled using the postal code, so that's Why I'm not using these lines, just leaving them for the challenge purpose.
        // cy.get('[data-testid="state-field"]').click();
        // cy.get('.css-cnpfpg > .css-n30o2w').contains(elements.state).click()
        // cy.get('[data-testid="city-shipping-field"]').clear()
        // cy.get('[data-testid="city-shipping-field"]').type(elements.city, {delay: 0});
        cy.get('[data-testid="phone-shipping-field"]').type(elements.phone, {delay: 0});

    }


    completePaymentFields(datatable) {
        const elements = datatable.hashes().pop()
        cy.get('.__PrivateStripeElement > iframe').eq(0).then($element => {
            const $body = $element.contents().find('body');
            let stripe = cy.wrap($body);
            stripe.find('[name="cardnumber"]').click().type(elements.number, {delay: 0});
        });
        cy.get('.css-t3sx9j > .css-i7os9p > .inputWrapper > [data-testid="base-input"]').type(elements.nameOnCard,  {delay: 0});
        cy.get('.__PrivateStripeElement > iframe').eq(1).then($element => {
            const $body = $element.contents().find('body');
            let stripe = cy.wrap($body);
            stripe.find('[name="exp-date"]').click().type(elements.mmyy, {delay: 0});
        });
        cy.get('.__PrivateStripeElement > iframe').eq(2).then($element => {
            const $body = $element.contents().find('body');
            let stripe = cy.wrap($body);
            stripe.find('[name="cvc"]').click().type(elements.cvv,  {delay: 0});
        });
    }
}