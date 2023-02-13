//!Helpers
import { cmsDataPath } from "../../../../helpers/dataPath";

import * as loginModule from "../../../../helpers/cms/login";
import * as adminsModule from "../../../../helpers/cms/adminsManagement/admins/admins";
//!Common PageObject

import * as buttonObj from "../../../../pageObject/common/buttonObj";
import { loginWithSessionObj } from "../../../../pageObject/cms/login/loginObj";
import * as visitObj from "../../../../pageObject/common/visitObj";
import * as formObj from "../../../../pageObject/common/formObj";
import * as grabTextObj from "../../../../pageObject/common/grabTextObj";
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
  it("Check Visibility in Main", () => {
    visitObj.verifyURLObj(adminsModule.urls().adminsPage);
    grabTextObj.comparePageTitleObj(
      adminsModule.pageTile().xpath.mainPage,
      adminsModule.pageTile().value.mainPage
    );

    grabTextObj.compareTableHeadingObj(
      adminsModule.tableHead().xpath.mainPage,
      adminsModule.tableHead().value.mainPage
    );
  });
  it.only("Create", () => {
    buttonObj.clickButtonWithContainsObj(
      adminsModule.button().xpath.addNew,
      adminsModule.button().value.addNew
    );
    visitObj.verifyURLObj(adminsModule.urls().createPage);
    grabTextObj.comparePageTitleObj(
      adminsModule.pageTile().xpath.createPage,
      adminsModule.pageTile().value.createPage
    );

    grabTextObj.compareBreadCrumbsObj(
      adminsModule.breadCrumbs().xpath.createPage,
      adminsModule.breadCrumbs().value.createPage
    );

    formObj.checkFormStatusObj(adminsModule.createForm());
  });
  it("Edit", () => {});
});
