import { getUrl, verifyURLObj } from "../../../pageObject/common/visitObj";
import { fillFormObj } from "../../common/formObj";
import { clickButtonWithContainsObj } from "../../common/buttonObj";
import { urlLogin } from "../../../helpers/cms/login";

const timeOut = 60000;
const testingEnv = Cypress.env("testingEnv");

export function loginWithSessionObj(xpathObj, buttonObj, filePath) {
  var email = null;
  var password = null;
  cy.checkAndReadFile(filePath).then((response) => {
    for (let index = 0; index < response.data.length; index++) {
      if (response.data[index].environment == testingEnv) {
        email = response.data[index].email;
        password = response.data[index].password;
      }
    }
    cy.session([email, password], () => {
      cy.visit(getUrl("cmsURL"), { setTimeout: timeOut }).wait(1000);
      fillFormObj(xpathObj, filePath, testingEnv);
      clickButtonWithContainsObj(
        buttonObj.xpath.signInBtn,
        buttonObj.value.signInBtn
      );
      cy.wait(1000);
    });
    cy.visit(getUrl("cmsURL"), { setTimeout: timeOut }).wait(1000);
    verifyURLObj(urlLogin().basePage);
  });
}

export function loginWithoutSessionObj(xpathObj, buttonObj, filePath) {
  var email = null;
  var password = null;
  cy.checkAndReadFile(filePath).then((response) => {
    for (let index = 0; index < response.data.length; index++) {
      if (response.data[index].environment == testingEnv) {
        email = response.data[index].email;
        password = response.data[index].password;
      }
    }

    cy.visit(getUrl("cmsURL"), { setTimeout: timeOut }).wait(1000);
    fillFormObj(xpathObj, filePath, testingEnv);
    clickButtonWithContainsObj(
      buttonObj.xpath.signInBtn,
      buttonObj.value.signInBtn
    );

    verifyURLObj(urlLogin().basePage);
  });
}
