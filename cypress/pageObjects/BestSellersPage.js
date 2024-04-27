import {BasePage} from "./BasePage";

export class BestSellersPage extends BasePage {
    constructor() {
        super();
    }

    selectFirstProduct() {
        cy.get('[data-testid="product-card-container-div"]').first().click();
        cy.get('[data-testid="add-to-cart"]').should('be.visible');
    }

}