const fs = require('fs')
import 'cypress-localstorage-commands'
import 'cypress-file-upload';

Cypress.Commands.add("checkAndReadFile", (filePath) => {
    return cy.readFile(filePath);
})

Cypress.Commands.add("deleteFile", (filePath) => {
    return fs.unlink(filePath)
})

Cypress.Commands.add("clipBoard", (xpath) => {
    return cy.get(xpath).focus().trigger('click').then(() => {
        cy.window().its('navigator.clipboard').invoke('readText').then(response => {
            return response;
        })
    })
})

Cypress.Commands.add("download", () => {
    cy.task('downloads', 'cypress/downloads').then(fileName => {
        cy.task('checkFileExists', 'cypress/downloads/' + fileName[0]).then(res => {
            if (res) {
                expect(res).to.be.true
            }
        })
    })
})

Cypress.Commands.add("returnData", (filePath, string, value) => {
    let data = null;
    cy.readFile(filePath).then(response => {
        for (let index = 0; index < response.data.length; index++) {
            if (response.data[index].environment == string) {
                data = response.data[index][value]
            }
        }
        return { data: data }
    })
})

Cypress.Commands.add("forceVisit", url => {
    cy.window().then(win => {
        return win.open(url, '_self');
    });
});

