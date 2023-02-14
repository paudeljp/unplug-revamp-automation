//!Helpers
import { cmsDataPath } from "../../../helpers/dataPath";

import * as loginModule from "../../../helpers/cms/login";
import * as featuredPickModule from "../../../helpers/cms/featuredPick/featuredPick";

//!Common PageObject
import * as buttonObj from "../../../pageObject/common/buttonObj";
import * as visitObj from "../../../pageObject/common/visitObj";
import * as formObj from "../../../pageObject/common/formObj";
import * as grabTextObj from "../../../pageObject/common/grabTextObj";
import * as tableObj from "../../../pageObject/common/tableObj";

//!Required PageObject
import * as createFakerObj from "../../../pageObject/cms/featuredPick/faker/createModule";
import * as editFakerObj from "../../../pageObject/cms/featuredPick/faker/editModule";

import { loginWithSessionObj } from "../../../pageObject/cms/login/loginObj";

describe("Featured Pick Module", () => {
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
      featuredPickModule.button().xpath.mainTab,
      featuredPickModule.button().value.mainTab
    );
  });
  it("Check Visibility in Main", () => {
    visitObj.verifyURLObj(featuredPickModule.urls().mainPage);
    grabTextObj.comparePageTitleObj(
      featuredPickModule.pageTitle().xpath.mainPage,
      featuredPickModule.pageTitle().value.mainPage
    );

    grabTextObj.compareTableHeadingObj(
      featuredPickModule.tableHead().xpath.mainPage,
      featuredPickModule.tableHead().value.mainPage
    );

    buttonObj.visibilityWithContainsObj(
      featuredPickModule.button().xpath.addNew,
      featuredPickModule.button().value.addNew
    );
  });

  it("Check Visibility in Create", () => {
    buttonObj.clickButtonWithContainsObj(
      featuredPickModule.button().xpath.addNew,
      featuredPickModule.button().value.addNew
    );
    visitObj.verifyURLObj(featuredPickModule.urls().createPage);
    grabTextObj.comparePageTitleObj(
      featuredPickModule.pageTitle().xpath.createPage,
      featuredPickModule.pageTitle().value.createPage
    );

    grabTextObj.compareBreadCrumbsObj(
      featuredPickModule.breadCrumbs().xpath.createPage,
      featuredPickModule.breadCrumbs().value.createPage
    );

    formObj.checkFormStatusObj(featuredPickModule.createForm());

    buttonObj.visibilityWithContainsObj(
      featuredPickModule.button().xpath.save,
      featuredPickModule.button().value.save
    );
    buttonObj.visibilityWithContainsObj(
      featuredPickModule.button().xpath.cancel,
      featuredPickModule.button().value.cancel
    );
  });

  it("Create", () => {
    buttonObj.clickButtonWithContainsObj(
      featuredPickModule.button().xpath.addNew,
      featuredPickModule.button().value.addNew
    );

    createFakerObj.fakerObj(cmsDataPath().featuredPick, "faker");

    formObj.fillFormObj(
      featuredPickModule.createForm(),
      cmsDataPath().featuredPick,
      "faker"
    );

    buttonObj.clickButtonWithContainsObj(
      featuredPickModule.button().xpath.save,
      featuredPickModule.button().value.save
    );

    grabTextObj.compareAlertMessageObj(
      featuredPickModule.alertMessage().xpath.createAlert,
      featuredPickModule.alertMessage().value.createAlert
    );
    createFakerObj.storeObj(cmsDataPath().featuredPick, "main");

    tableObj.compareTableDataObj(
      featuredPickModule.tableBody(),
      cmsDataPath().featuredPick,
      "main"
    );
  });

  it("Check Visibility in Edit", () => {
    tableObj.clickTableButtonObj(
      featuredPickModule.tableBody(),
      cmsDataPath().featuredPick,
      "main",
      "Edit"
    );

    grabTextObj.comparePageTitleObj(
      featuredPickModule.pageTitle().xpath.editPage,
      featuredPickModule.pageTitle().value.editPage
    );
    grabTextObj.compareBreadCrumbsObj(
      featuredPickModule.breadCrumbs().xpath.editPage,
      featuredPickModule.breadCrumbs().value.editPage
    );

    formObj.checkFormStatusObj(featuredPickModule.editForm());
    formObj.compareFormDataObj(
      featuredPickModule.editForm(),
      cmsDataPath().featuredPick,
      "main"
    );

    buttonObj.visibilityWithContainsObj(
      featuredPickModule.button().xpath.update,
      featuredPickModule.button().value.update
    );
    buttonObj.visibilityWithContainsObj(
      featuredPickModule.button().xpath.cancel,
      featuredPickModule.button().value.cancel
    );
  });

  it("Edit", () => {
    tableObj.clickTableButtonObj(
      featuredPickModule.tableBody(),
      cmsDataPath().featuredPick,
      "main",
      "Edit"
    );

    editFakerObj.fakerObj(cmsDataPath().featuredPick, "faker");
    formObj.fillFormObj(
      featuredPickModule.editForm(),
      cmsDataPath().featuredPick,
      "faker"
    );
    buttonObj.clickButtonWithContainsObj(
      featuredPickModule.button().xpath.update,
      featuredPickModule.button().value.update
    );

    grabTextObj.compareAlertMessageObj(
      featuredPickModule.alertMessage().xpath.editAlert,
      featuredPickModule.alertMessage().value.editAlert
    );
    editFakerObj.storeObj(cmsDataPath().featuredPick, "main");
  });

  it("Delete", () => {
    tableObj.clickTableButtonObj(
      featuredPickModule.tableBody(),
      cmsDataPath().featuredPick,
      "main",
      "Delete"
    );

    grabTextObj.deleteConfirmModal(
      featuredPickModule.confirmModal().xpath.modalLable,
      featuredPickModule.confirmModal().value.modalLable
    );

    grabTextObj.deleteConfirmModal(
      featuredPickModule.confirmModal().xpath.modalDesc,
      featuredPickModule.confirmModal().value.modalDesc
    );

    buttonObj.visibilityWithContainsObj(
      featuredPickModule.button().xpath.delete,
      featuredPickModule.button().value.delete
    );
    buttonObj.visibilityWithContainsObj(
      featuredPickModule.button().xpath.close,
      featuredPickModule.button().value.close
    );
    buttonObj.clickButtonWithContainsObj(
      featuredPickModule.button().xpath.confirm,
      featuredPickModule.button().value.confirm
    );
    grabTextObj.compareAlertMessageObj(
      featuredPickModule.alertMessage().xpath.deleteAlert,
      featuredPickModule.alertMessage().value.deleteAlert
    );
  });
});
