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
import * as tableObj from "../../../../pageObject/common/tableObj";
import * as createFakerObj from "../../../../pageObject/cms/adminsManagement/admins/faker/createModule";

import * as editFakerObj from "../../../../pageObject/cms/adminsManagement/admins/faker/editModule";

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
  it("Check Visibility in Create", () => {
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

    buttonObj.visibilityWithContainsObj(
      adminsModule.button().xpath.save,
      adminsModule.button().value.save
    );
    buttonObj.visibilityWithContainsObj(
      adminsModule.button().xpath.cancel,
      adminsModule.button().value.cancel
    );
  });

  it("Create", () => {
    buttonObj.clickButtonWithContainsObj(
      adminsModule.button().xpath.addNew,
      adminsModule.button().value.addNew
    );

    createFakerObj.fakerObj(cmsDataPath().admins, "faker");

    formObj.fillFormObj(
      adminsModule.createForm(),
      cmsDataPath().admins,
      "faker"
    );

    buttonObj.clickButtonWithContainsObj(
      adminsModule.button().xpath.save,
      adminsModule.button().value.save
    );

    grabTextObj.compareAlertMessageObj(
      adminsModule.alertMessage().xpath.createAlert,
      adminsModule.alertMessage().value.createAlert
    );
    createFakerObj.storeObj(cmsDataPath().admins, "main");
    tableObj.compareTableDataObj(
      adminsModule.tableBody(),
      cmsDataPath().admins,
      "main"
    );
  });

  it.only("Check Visibility in Edit", () => {
    tableObj.clickTableButtonObj(
      adminsModule.tableBody(),
      cmsDataPath().admins,
      "main",
      "Edit"
    );

    grabTextObj.comparePageTitleObj(
      adminsModule.pageTile().xpath.editPage,
      adminsModule.pageTile().value.editPage
    );
    grabTextObj.compareBreadCrumbsObj(
      adminsModule.breadCrumbs().xpath.editPage,
      adminsModule.breadCrumbs().value.editPage
    );

    formObj.checkFormStatusObj(adminsModule.editForm());
    formObj.compareFormDataObj(
      adminsModule.editForm(),
      cmsDataPath().admins,
      "main"
    );

    buttonObj.visibilityWithContainsObj(
      adminsModule.button().xpath.update,
      adminsModule.button().value.update
    );
    buttonObj.visibilityWithContainsObj(
      adminsModule.button().xpath.cancel,
      adminsModule.button().value.cancel
    );
  });

  it("Edit", () => {
    tableObj.clickTableButtonObj(
      adminsModule.tableBody(),
      cmsDataPath().admins,
      "main",
      "Edit"
    );
  });
});
