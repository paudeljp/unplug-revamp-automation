import allAssertions from "../../page/allAssertions";

const assertionP = new allAssertions();

export function getUrl(url) {
  return Cypress.env(Cypress.env("testingEnv"))[url];
}

export function verifyURLObj(value) {
  assertionP.verifyUrl(value);
}

export function visitMailSlurpURL(JSONFilePath) {
  cy.checkAndReadFile(JSONFilePath).then((response) => {
    cy.forceVisit(response.verifyUserLink);
  });
}
