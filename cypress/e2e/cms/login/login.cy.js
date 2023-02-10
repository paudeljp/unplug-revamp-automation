//!Helpers
import { cmsDataPath } from "../../../helpers/dataPath";

import * as loginModule from "../../../helpers/cms/login";

//!Common PageObject
import * as visitObj from "../../../pageObject/common/visitObj";
import * as buttonObj from "../../../pageObject/common/buttonObj";
import * as formObj from "../../../pageObject/common/formObj";
import * as grabTextObj from "../../../pageObject/common/grabTextObj";
import * as tableObj from "../../../pageObject/common/tableObj";

//!Required PageObject
import * as loginObj from "../../../pageObject/cms/login/loginObj";
const timeOut = 60000;
const environment = Cypress.env("testingEnv");

describe("Login Module", () => {
  beforeEach(() => {
    cy.visit(visitObj.getUrl("cmsURL"), { setTimeout: timeOut }).wait(1000);
    visitObj.verifyURLObj(loginModule.urlLogin().basePage);
  });

  it.only("Check Visibility", () => {
    formObj.checkFormStatusObj(loginModule.loginForm());
  });

  it("Invalid Login", () => {});

  it("Valid Login", () => {});
});
