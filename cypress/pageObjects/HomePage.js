import {BasePage} from "./BasePage";

export class HomePage extends BasePage {
    constructor() {
        super();
    }

    closeHomePagePopUp() {
        cy.get('._xxsoyodj_popup-lead-trafilea-close-cross', {timeout: 15000}).click();
    }

    visitSection(section) {
        cy.get('.styles_headerListItemLink__v7oI_').contains(section).click();
        // page.closeHomePagePopUp();
    }
}