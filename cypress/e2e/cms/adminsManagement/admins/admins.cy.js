//!Helpers
import { cmsDataPath } from "../../../../helpers/dataPath";

import * as loginModule from "../../../../helpers/cms/login";
import * as adminsModule from "../../../../helpers/cms/adminsManagement/admins/admins";
//!Common PageObject

import * as buttonObj from "../../../../pageObject/common/buttonObj";
import { loginWithSessionObj } from "../../../../pageObject/cms/login/loginObj";

describe("Admins Module", () => {
  before(() => {
    Cypress.session.clearAllSavedSessions();
  });
  beforeEach(() => {
    loginWithSessionObj(
      loginModule.loginForm(),
      loginModule.loginButton(),
      cmsDataPath().login
    );

    buttonObj.clickButtonWithContainsObj(
      adminsModule.button().xpath.mainTab,
      adminsModule.button().value.mainTab
    );
    buttonObj.clickButtonWithContainsObj(
      adminsModule.button().xpath.subTab,
      adminsModule.button().value.subTab
    );
  });
  it("Check Visibility in Main", () => {});
  it("Create", () => {});
  it("Edit", () => {});
});
