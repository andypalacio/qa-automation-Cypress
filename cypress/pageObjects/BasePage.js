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
        cy.get(`[data-testid="${caption}"]`)
    }
}