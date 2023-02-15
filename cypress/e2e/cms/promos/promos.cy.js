//!Helpers
import { cmsDataPath } from "../../../helpers/dataPath";

import * as loginModule from "../../../helpers/cms/login";
import * as promosModule from "../../../helpers/cms/promos/promos";

//!Common PageObject
import * as buttonObj from "../../../pageObject/common/buttonObj";
import * as visitObj from "../../../pageObject/common/visitObj";
import * as formObj from "../../../pageObject/common/formObj";
import * as grabTextObj from "../../../pageObject/common/grabTextObj";
import * as tableObj from "../../../pageObject/common/tableObj";

//!Required PageObject
import * as createFakerObj from "../../../pageObject/cms/promos/faker/createModule";
import * as editFakerObj from "../../../pageObject/cms/promos/faker/editModule";

import { loginWithSessionObj } from "../../../pageObject/cms/login/loginObj";

describe("Promos Module", () => {
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
      promosModule.button().xpath.mainTab,
      promosModule.button().value.mainTab
    );
  });

  it("Filter promos form", () => {
    formObj.checkFormStatusObj(promosModule.filterForm());
  });
  it("Check Visibility in Main", () => {
    visitObj.verifyURLObj(promosModule.urls().mainPage);

    grabTextObj.comparePageTitleObj(
      promosModule.pageTitle().xpath.mainPage,
      promosModule.pageTitle().value.mainPage
    );

    grabTextObj.compareTableHeadingObj(
      promosModule.tableHead().xpath.mainPage,
      promosModule.tableHead().value.mainPage
    );

    buttonObj.visibilityWithContainsObj(
      promosModule.button().xpath.createPromo,
      promosModule.button().value.createPromo
    );

    buttonObj.visibilityWithContainsObj(
      promosModule.button().xpath.createTeamPromo,
      promosModule.button().value.createTeamPromo
    );
    buttonObj.visibilityWithContainsObj(
      promosModule.button().xpath.export,
      promosModule.button().value.export
    );

    buttonObj.visibilityWithContainsObj(
      promosModule.button().xpath.clear,
      promosModule.button().value.clear
    );

    buttonObj.visibilityWithContainsObj(
      promosModule.button().xpath.go,
      promosModule.button().value.go
    );
    buttonObj.visibilityWithContainsObj(
      promosModule.button().xpath.bulkDelete,
      promosModule.button().value.bulkDelete
    );
  });
});
