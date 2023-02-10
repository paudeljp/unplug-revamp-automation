const timeOut = '60000';

export default class allAssertions {
    containsText(xpath,value){
        cy.get(xpath, { setTimeout: timeOut })
            .should('contain', value)
            .wait(1000);
    }

    verifyUrl(value) {
        cy.url({ setTimeout: timeOut })
            .should('contain', value)
            .wait(1000);
    }

    verifyText(xpath, value) {
        cy.get(xpath, { setTimeout: timeOut })
            .should('have.text', value)
            .wait(1000);
    }

    exists(xpath){
        cy.get(xpath, { setTimeout: timeOut })
            .should('exist')
            .wait(1000);
    }

    visibilityWithoutContains(xpath) {
        cy.get(xpath, { setTimeout: timeOut })
            .should('be.visible')
            .wait(1000);
    }

    visibilityWithContains(xpath, value) {
        cy.get(xpath, { setTimeout: timeOut })
            .contains(value)
            .should('be.visible')
            .wait(1000);
    }

    disabled(xpath) {
        cy.get(xpath, { setTimeout: timeOut })
            .should('be.disabled')
            .wait(1000);
    }

    readOnly(xpath) {
        cy.get(xpath, { setTimeout: timeOut })
            .should('have.attr', "readonly")
            .wait(1000);
    }

    input(xpath, value) {
        if (value != null) {
            cy.get(xpath, { setTimeout: timeOut })
                .should('have.value', value)
                .wait(1000);
        }
    }

    inputWithEnterOption(xpath, value) {
        if (value != null) {
            cy.get(xpath, { setTimeout: timeOut })
                .should('have.value', value)
                .wait(1000);
        }
    }

    domInput(xpath, subxpath, value) {
        if (value != null) {
            cy.get(xpath, { setTimeout: timeOut })
            cy.get(subxpath, { setTimeout: timeOut })
                .should('have.value', value)
                .wait(1000);
        }
    }

    iFrame(xpath, value) {
        if (value != null) {
            cy.iframe(xpath, { setTimeout: timeOut })
                .contains(value)
                .wait(1000);
        }
    }

    textArea(xpath, value) {
        if (value != null) {
            cy.get(xpath, { setTimeout: timeOut })
                .should("have.value", value)
                .wait(1000);
        }
    }
    clickTextArea(xpath, value){
        if (value != null) {
            cy.get(xpath, { setTimeout: timeOut })
                .should('contain',value)
                .wait(1000);
        }
    }

    selectOption(xpath, value) {
        if (value != null) {
            cy.get(xpath, { setTimeout: timeOut })
                .should('have.value', value)
                .wait(1000);
        }
    }

    dropDownWithSearch(xpath, value) {
        if (value != null) {
            cy.get(xpath, { setTimeout: timeOut })
                .contains(value)
                .wait(1000);
        }
    }

    dropDownWithoutSearch(xpath, value) {
        if (value != null) {
            cy.get(xpath, { setTimeout: timeOut })
                .contains(value)
                .wait(1000);
        }
    }

    radioOption(xpath, value) {
        if (value != null) {
            cy.get(xpath, { setTimeout: timeOut })
                .should('be.checked')
                .and('have.value', value)
                .wait(1000);
        }
    }

    checkBox(xpath, value) {
        if (value != null) {
            cy.get(xpath, { setTimeout: timeOut })
                .should('be.checked')
                .and('have.value', value)
                .wait(1000);
        }
    }

    fileUpload(xpath, value) {
        if (value != null) {
            cy.get(xpath, { setTimeout: timeOut })
                .find('img')
                .should('have.attr', 'src')
                .should('include', value)
                .wait(1000);
        }
    }

}