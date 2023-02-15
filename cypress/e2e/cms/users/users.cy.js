//!Helpers
import { cmsDataPath } from "../../../helpers/dataPath";

import * as loginModule from "../../../helpers/cms/login";
import * as usersModule from "../../../helpers/cms/users/users";

//!Common PageObject
import * as buttonObj from "../../../pageObject/common/buttonObj";
import * as visitObj from "../../../pageObject/common/visitObj";
import * as formObj from "../../../pageObject/common/formObj";
import * as grabTextObj from "../../../pageObject/common/grabTextObj";
import * as tableObj from "../../../pageObject/common/tableObj";

//!Required PageObject

import { loginWithSessionObj } from "../../../pageObject/cms/login/loginObj";

describe("Users Module", () => {
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
      usersModule.button().xpath.mainTab,
      usersModule.button().value.mainTab
    );
  });

  it("Check Visibility in Main", () => {
    visitObj.verifyURLObj(usersModule.urls().mainPage);

    grabTextObj.comparePageTitleObj(
      usersModule.pageTitle().xpath.mainPage,
      usersModule.pageTitle().value.mainPage
    );

    buttonObj.visibilityWithContainsObj(
      usersModule.button().xpath.export,
      usersModule.button().value.export
    );
    buttonObj.visibilityWithContainsObj(
      usersModule.button().xpath.download,
      usersModule.button().value.download
    );

    formObj.checkFormStatusObj(usersModule.filterForm());

    buttonObj.visibilityWithContainsObj(
      usersModule.button().xpath.go,
      usersModule.button().value.go
    );
    buttonObj.visibilityWithContainsObj(
      usersModule.button().xpath.clear,
      usersModule.button().value.clear
    );

    grabTextObj.compareTableHeadingObj(
      usersModule.tableHead().xpath.mainPage,
      usersModule.tableHead().value.mainPage
    );
  });

  it("Filter valid user", () => {
    formObj.fillFormObj(usersModule.filterForm(), cmsDataPath().users, "main");

    buttonObj.clickButtonWithContainsObj(
      usersModule.button().xpath.go,
      usersModule.button().value.go
    );

    tableObj.compareTableDataObj(
      usersModule.tableBody(),
      cmsDataPath().users,
      "validFilter"
    );
  });

  it("Filter invalid user", () => {
    formObj.fillFormObj(
      usersModule.filterForm(),
      cmsDataPath().users,
      "invalidFilter"
    );

    buttonObj.clickButtonWithContainsObj(
      usersModule.button().xpath.go,
      usersModule.button().value.go
    );

    grabTextObj.emptyTableObj(
      usersModule.tableBody().emptyTable[0],
      usersModule.tableBody().emptyTable[1]
    );
  });

  it("Profile  user", () => {
    formObj.fillFormObj(
      usersModule.filterForm(),
      cmsDataPath().users,
      "validFilter"
    );

    buttonObj.clickButtonWithContainsObj(
      usersModule.button().xpath.go,
      usersModule.button().value.go
    );

    tableObj.compareTableDataObj(
      usersModule.tableBody(),
      cmsDataPath().users,
      "validFilter"
    );

    cy.readFile(cmsDataPath().users).then((res) => {
      buttonObj.clickButtonWithContainsObj(
        usersModule.button().xpath.tableData,
        res.data[2].name
      );
    });

    visitObj.verifyURLObj(usersModule.urls().profilePage);
    grabTextObj.comparePageTitleObj(
      usersModule.pageTitle().xpath.profilePage,
      usersModule.pageTitle().value.profilePage
    );
    grabTextObj.compareBreadCrumbsObj(
      usersModule.breadCrumbs().xpath.profilePage,
      usersModule.breadCrumbs().value.profilePage
    );
  });
});
