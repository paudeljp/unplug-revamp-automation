//!Helpers
import { cmsDataPath } from "../../../helpers/dataPath";

import * as loginModule from "../../../helpers/cms/login";
import * as monthlyChallengeModule from "../../../helpers/cms/monthlyChallenge/monthlyChallenge";

//!Common PageObject
import * as buttonObj from "../../../pageObject/common/buttonObj";
import * as visitObj from "../../../pageObject/common/visitObj";
import * as formObj from "../../../pageObject/common/formObj";
import * as grabTextObj from "../../../pageObject/common/grabTextObj";
import * as tableObj from "../../../pageObject/common/tableObj";

//!Required PageObject
import * as createFakerObj from "../../../pageObject/cms/monthlyChallenge/faker/createModule";
import * as editFakerObj from "../../../pageObject/cms/monthlyChallenge/faker/editModule";

import { loginWithSessionObj } from "../../../pageObject/cms/login/loginObj";

describe("Monthly Challenge Module", () => {
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
      monthlyChallengeModule.button().xpath.mainTab,
      monthlyChallengeModule.button().value.mainTab
    );
  });
  it("Check Visibility in Main", () => {
    visitObj.verifyURLObj(monthlyChallengeModule.urls().mainPage);
    grabTextObj.comparePageTitleObj(
      monthlyChallengeModule.pageTitle().xpath.mainPage,
      monthlyChallengeModule.pageTitle().value.mainPage
    );

    grabTextObj.compareTableHeadingObj(
      monthlyChallengeModule.tableHead().xpath.mainPage,
      monthlyChallengeModule.tableHead().value.mainPage
    );

    buttonObj.visibilityWithContainsObj(
      monthlyChallengeModule.button().xpath.addNew,
      monthlyChallengeModule.button().value.addNew
    );
  });

  it("Check Visibility in Create", () => {
    buttonObj.clickButtonWithContainsObj(
      monthlyChallengeModule.button().xpath.addNew,
      monthlyChallengeModule.button().value.addNew
    );
    visitObj.verifyURLObj(monthlyChallengeModule.urls().createPage);
    grabTextObj.comparePageTitleObj(
      monthlyChallengeModule.pageTitle().xpath.createPage,
      monthlyChallengeModule.pageTitle().value.createPage
    );

    grabTextObj.compareBreadCrumbsObj(
      monthlyChallengeModule.breadCrumbs().xpath.createPage,
      monthlyChallengeModule.breadCrumbs().value.createPage
    );

    formObj.checkFormStatusObj(monthlyChallengeModule.createForm());

    buttonObj.visibilityWithContainsObj(
      monthlyChallengeModule.button().xpath.save,
      monthlyChallengeModule.button().value.save
    );
    buttonObj.visibilityWithContainsObj(
      monthlyChallengeModule.button().xpath.cancel,
      monthlyChallengeModule.button().value.cancel
    );
  });

  it("Create", () => {
    buttonObj.clickButtonWithContainsObj(
      monthlyChallengeModule.button().xpath.addNew,
      monthlyChallengeModule.button().value.addNew
    );

    createFakerObj.fakerObj(cmsDataPath().monthlyChallenge, "faker");

    formObj.fillFormObj(
      monthlyChallengeModule.createForm(),
      cmsDataPath().monthlyChallenge,
      "faker"
    );

    buttonObj.clickButtonWithContainsObj(
      monthlyChallengeModule.button().xpath.save,
      monthlyChallengeModule.button().value.save
    );

    grabTextObj.compareAlertMessageObj(
      monthlyChallengeModule.alertMessage().xpath.createAlert,
      monthlyChallengeModule.alertMessage().value.createAlert
    );
    createFakerObj.storeObj(cmsDataPath().monthlyChallenge, "main");

    tableObj.compareTableDataObj(
      monthlyChallengeModule.tableBody(),
      cmsDataPath().monthlyChallenge,
      "main"
    );
  });

  it("Check Visibility in Edit", () => {
    tableObj.clickTableButtonObj(
      monthlyChallengeModule.tableBody(),
      cmsDataPath().monthlyChallenge,
      "main",
      "Edit"
    );

    grabTextObj.comparePageTitleObj(
      monthlyChallengeModule.pageTitle().xpath.editPage,
      monthlyChallengeModule.pageTitle().value.editPage
    );
    grabTextObj.compareBreadCrumbsObj(
      monthlyChallengeModule.breadCrumbs().xpath.editPage,
      monthlyChallengeModule.breadCrumbs().value.editPage
    );

    formObj.checkFormStatusObj(monthlyChallengeModule.editForm());

    formObj.compareFormDataObj(
      monthlyChallengeModule.editForm(),
      cmsDataPath().monthlyChallenge,
      "main"
    );

    buttonObj.visibilityWithContainsObj(
      monthlyChallengeModule.button().xpath.save,
      monthlyChallengeModule.button().value.save
    );
    buttonObj.visibilityWithContainsObj(
      monthlyChallengeModule.button().xpath.cancel,
      monthlyChallengeModule.button().value.cancel
    );
  });

  it("Edit", () => {
    tableObj.clickTableButtonObj(
      monthlyChallengeModule.tableBody(),
      cmsDataPath().monthlyChallenge,
      "main",
      "Edit"
    );

    editFakerObj.fakerObj(cmsDataPath().monthlyChallenge, "faker");
    formObj.fillFormObj(
      monthlyChallengeModule.editForm(),
      cmsDataPath().monthlyChallenge,
      "faker"
    );
    buttonObj.clickButtonWithContainsObj(
      monthlyChallengeModule.button().xpath.save,
      monthlyChallengeModule.button().value.save
    );

    grabTextObj.compareAlertMessageObj(
      monthlyChallengeModule.alertMessage().xpath.editAlert,
      monthlyChallengeModule.alertMessage().value.editAlert
    );
    editFakerObj.storeObj(cmsDataPath().monthlyChallenge, "main");
  });

  it("Delete", () => {
    tableObj.clickTableButtonObj(
      monthlyChallengeModule.tableBody(),
      cmsDataPath().monthlyChallenge,
      "main",
      "Delete"
    );

    grabTextObj.deleteConfirmModal(
      monthlyChallengeModule.confirmModal().xpath.modalLable,
      monthlyChallengeModule.confirmModal().value.modalLable
    );

    grabTextObj.deleteConfirmModal(
      monthlyChallengeModule.confirmModal().xpath.modalDesc,
      monthlyChallengeModule.confirmModal().value.modalDesc
    );

    buttonObj.visibilityWithContainsObj(
      monthlyChallengeModule.button().xpath.delete,
      monthlyChallengeModule.button().value.delete
    );
    buttonObj.visibilityWithContainsObj(
      monthlyChallengeModule.button().xpath.close,
      monthlyChallengeModule.button().value.close
    );
    buttonObj.clickButtonWithContainsObj(
      monthlyChallengeModule.button().xpath.confirm,
      monthlyChallengeModule.button().value.confirm
    );
    grabTextObj.compareAlertMessageObj(
      monthlyChallengeModule.alertMessage().xpath.deleteAlert,
      monthlyChallengeModule.alertMessage().value.deleteAlert
    );
  });
});
