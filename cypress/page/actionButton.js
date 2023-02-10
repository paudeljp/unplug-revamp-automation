const timeOut = '60000';

export default class actionButton {
    buttonWithContains(xpath, value) {
        cy.get(xpath, { setTimeout: timeOut })
            .contains(value)
            .click({ force: true })
            .wait(1000);
    }

    buttonWithoutContains(xpath) {
        cy.get(xpath, { setTimeout: timeOut })
            .click({ force: true })
            .wait(1000);
    }

    pageLoadButtonWithContains(xpath, value) {
        cy.window().document().then(function (doc) {
            doc.addEventListener('click', () => {
                setTimeout(function () { doc.location.reload() }, 500)
            })
            cy.get(xpath, { setTimeout: timeOut })
                .contains(value)
                .click({ force: true })
                .wait(1000);
        })
    }

    pageLoadButtonWithoutContains(xpath) {
        cy.window().document().then(function (doc) {
            doc.addEventListener('click', () => {
                setTimeout(function () { doc.location.reload() }, 500)
            })
            cy.get(xpath, { setTimeout: timeOut })
                .click({ force: true })
                .wait(1000);
        })
    }
}