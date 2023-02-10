const timeOut = '60000';

export default class formFields {
  input(xpath, value) {
    if (value != null) {
      cy.get(xpath, { setTimeout: timeOut })
        .clear({ force: true })
        .type(value, { force: true })
        .should('have.value', value)
        .wait(1000);
    }else{
      cy.get(xpath, { setTimeout: timeOut })
        .clear({ force: true })
        .wait(1000);
    }
  }

  inputWithEnterOption(xpath, value) {
    if (value != null) {
      cy.get(xpath, { setTimeout: timeOut })
        .clear({ force: true })
        .type(value, { force: true })
        .should('have.value', value)
        .type('{enter}')
        .wait(1000);
    }
  }

  domInput(xpath, value) {
    if (value != null) {
      cy.get(xpath[0], { setTimeout: timeOut })
      cy.get(xpath[1], { setTimeout: timeOut })
        .clear({ force: true })
        .type(value, { force: true })
        .should('have.value', value)
        .wait(1000);
    }
  }

  iFrame(xpath, value) {
    if (value != null) {
      cy.iframe(xpath, { setTimeout: timeOut })
        .type(value)
        .contains(value)
        .wait(1000);
    }
  }

  textArea(xpath, value) {
    if (value != null) {
      cy.get(xpath, { setTimeout: timeOut })
        .invoke('val', '')
        .invoke('val', value)
        .should("have.value", value)
        .wait(1000);
    }
  }

  clickTextArea(xpath, value) {
    if (value != null) {
      cy.get(xpath, { setTimeout: timeOut })
        .click({ force: true }).then(() => {
          cy.get(xpath, { setTimeout: timeOut })
            .type(value)
            .should('contain',value)
        })
        .wait(1000);
    }
  }

  selectOption(xpath, value) {
    if (value != null) {
      cy.get(xpath, { setTimeout: timeOut })
        .select(value, { force: true })
        .wait(1000);
    }
  }

  dropDownWithSearch(xpath, value) {
    if (value != null) {
      cy.get(xpath[0], { setTimeout: timeOut })
        .click({ force: true }).then(() => {
          cy.get(xpath[1], { setTimeout: timeOut })
            .clear({ force: true })
            .type(value, { force: true })
            .then(() => {
              cy.get(xpath[2], { setTimeout: timeOut })
                .contains(value)
                .click({ force: true })
            })
        })
        .wait(1000);
    }
  }

  dropDownWithoutSearch(xpath, value) {
    if (value != null) {
      cy.get(xpath[0], { setTimeout: timeOut })
        .click({ force: true }).then(() => {
          cy.get(xpath[1], { setTimeout: timeOut })
            .contains(value)
            .click({ force: true })
        })
        .wait(1000);
    }
  }

  radioOption(xpath, value) {
    if (value != null) {
      cy.get(xpath, { setTimeout: timeOut })
        .select(value, { force: true })
        .wait(1000);
    }
  }

  singleCheckBox(xpath, value) {
    if (value != null) {   
      if(value){ 
        cy.get(xpath, { setTimeout: timeOut })
          .check({ force: true })
          .wait(1000);
      }else{ 
        cy.get(xpath, { setTimeout: timeOut })
          .uncheck({ force: true })
          .wait(1000);
      } 
    }
  }

  checkBox(xpath, value) {
    if (value != null) {
      cy.get(xpath, { setTimeout: timeOut })
        .check(value, { force: true })
        .wait(1000);
    }
  }

  fileUpload(xpath, value) {
    if (value != null) {
      cy.get(xpath, { setTimeout: timeOut })
        .attachFile(value, { subjectType: "input" })
        .wait(1000);
    }
  }

  mapField(xpath, value) {
    if (value != null) {
      cy.get(xpath[0], { setTimeout: timeOut }).contains(xpath[1]).click({force: true}).then(()=>{
        cy.get(xpath[2]).clear({force: true}).type(value+ '{enter}')
      })
    }
  }
}
