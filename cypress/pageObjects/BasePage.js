export class BasePage {
    constructor() {

    }

    navigateTo(url) {
        if (!url) {
            throw new Error(`url Inválida: ${url}`)
        }
        cy.visit(url);
    }

    clickButton(caption) {
        cy.get(caption).click();
    }

    checkURL(url){
        cy.url().should('include', url)
    }
}