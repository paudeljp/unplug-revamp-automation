//!Helpers
import { cmsDataPath } from "../../../helpers/dataPath";
import * as loginModule from "../../../helpers/cms/login";

//!Common PageObject
import * as visitObj from "../../../pageObject/common/visitObj";
import * as buttonObj from "../../../pageObject/common/buttonObj";
import * as formObj from "../../../pageObject/common/formObj";

//!Required PageObject

import grabTextPage from "../../../page/grabTextPage";

const grabText = new grabTextPage();

const timeOut = 60000;
const environment = Cypress.env("testingEnv");

describe("Login Module", () => {
  beforeEach(() => {
    cy.visit(visitObj.getUrl("cmsURL"), { setTimeout: timeOut }).wait(1000);
    visitObj.verifyURLObj(loginModule.urlLogin().basePage);
  });

  it("Check Visibility", () => {
    formObj.checkFormStatusObj(loginModule.loginForm());
    buttonObj.visibilityWithContainsObj(
      loginModule.loginButton().xpath.signInBtn,
      loginModule.loginButton().value.signInBtn
    );
  });

  it("Invalid Login", () => {
    formObj.fillFormObj(
      loginModule.loginForm(),
      cmsDataPath().login,
      "invalid"
    );
    buttonObj.clickButtonWithContainsObj(
      loginModule.loginButton().xpath.signInBtn,
      loginModule.loginButton().value.signInBtn
    );

    visitObj.verifyURLObj(loginModule.urlLogin().basePage);
    grabText
      .grabSingleText(loginModule.alertMessageLogin().xpath.invalidAlert)
      .then((res) => {
        expect(res).to.eq(loginModule.alertMessageLogin().value.invalidAlert);
      });
  });

  it("Valid Login", () => {
    formObj.fillFormObj(
      loginModule.loginForm(),
      cmsDataPath().login,
      environment
    );
    buttonObj.clickButtonWithContainsObj(
      loginModule.loginButton().xpath.signInBtn,
      loginModule.loginButton().value.signInBtn
    );
    visitObj.verifyURLObj(loginModule.urlLogin().homePage);
  });
});
