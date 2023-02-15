//!Helpers
import { cmsDataPath } from "../../../helpers/dataPath";

import * as loginModule from "../../../helpers/cms/login";
import * as newsletterModule from "../../../helpers/cms/newsletter/newsletter";

//!Common PageObject
import * as buttonObj from "../../../pageObject/common/buttonObj";
import * as visitObj from "../../../pageObject/common/visitObj";
import * as formObj from "../../../pageObject/common/formObj";
import * as grabTextObj from "../../../pageObject/common/grabTextObj";
import * as tableObj from "../../../pageObject/common/tableObj";

//!Required PageObject
import * as createFakerObj from "../../../pageObject/cms/newsletter/faker/createModule";
import * as editFakerObj from "../../../pageObject/cms/newsletter/faker/editModule";

import { loginWithSessionObj } from "../../../pageObject/cms/login/loginObj";

describe("Newsletter Module", () => {
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
      newsletterModule.button().xpath.mainTab,
      newsletterModule.button().value.mainTab
    );
  });
  it("Check Visibility in Main", () => {
    visitObj.verifyURLObj(newsletterModule.urls().mainPage);
    grabTextObj.comparePageTitleObj(
      newsletterModule.pageTitle().xpath.mainPage,
      newsletterModule.pageTitle().value.mainPage
    );

    grabTextObj.compareTableHeadingObj(
      newsletterModule.tableHead().xpath.newsletterTable,
      newsletterModule.tableHead().value.newsletterTable
    );

    buttonObj.visibilityWithContainsObj(
      newsletterModule.button().xpath.addNew,
      newsletterModule.button().value.addNew
    );
  });

  it("Check Visibility in Create", () => {
    buttonObj.clickButtonWithContainsObj(
      newsletterModule.button().xpath.addNew,
      newsletterModule.button().value.addNew
    );
    visitObj.verifyURLObj(newsletterModule.urls().createPage);
    grabTextObj.comparePageTitleObj(
      newsletterModule.pageTitle().xpath.createPage,
      newsletterModule.pageTitle().value.createPage
    );

    grabTextObj.compareBreadCrumbsObj(
      newsletterModule.breadCrumbs().xpath.createPage,
      newsletterModule.breadCrumbs().value.createPage
    );

    formObj.checkFormStatusObj(newsletterModule.createNewslettersPageForm());

    buttonObj.visibilityWithContainsObj(
      newsletterModule.button().xpath.save,
      newsletterModule.button().value.save
    );
    buttonObj.visibilityWithContainsObj(
      newsletterModule.button().xpath.cancel,
      newsletterModule.button().value.cancel
    );
  });

  it("Create", () => {
    buttonObj.clickButtonWithContainsObj(
      newsletterModule.button().xpath.addNew,
      newsletterModule.button().value.addNew
    );

    createFakerObj.fakerObj(cmsDataPath().newsletter, "faker");

    formObj.fillFormObj(
      newsletterModule.createNewslettersPageForm(),
      cmsDataPath().newsletter,
      "faker"
    );

    buttonObj.clickButtonWithContainsObj(
      newsletterModule.button().xpath.save,
      newsletterModule.button().value.save
    );

    grabTextObj.compareAlertMessageObj(
      newsletterModule.alertMessage().xpath.createNewsletter,
      newsletterModule.alertMessage().value.createNewsletter
    );
    createFakerObj.storeObj(cmsDataPath().newsletter, "main");

    tableObj.compareTableDataObj(
      newsletterModule.tableBody(),
      cmsDataPath().newsletter,
      "main"
    );
  });

  it("Check Visibility in Edit", () => {
    tableObj.clickTableButtonObj(
      newsletterModule.tableBody(),
      cmsDataPath().newsletter,
      "main",
      "Edit"
    );

    grabTextObj.comparePageTitleObj(
      newsletterModule.pageTitle().xpath.editPage,
      newsletterModule.pageTitle().value.editPage
    );
    grabTextObj.compareBreadCrumbsObj(
      newsletterModule.breadCrumbs().xpath.editPage,
      newsletterModule.breadCrumbs().value.editPage
    );

    formObj.checkFormStatusObj(newsletterModule.editNewslettersPageForm());

    formObj.compareFormDataObj(
      newsletterModule.editNewslettersPageForm(),
      cmsDataPath().newsletter,
      "main"
    );

    buttonObj.visibilityWithContainsObj(
      newsletterModule.button().xpath.update,
      newsletterModule.button().value.update
    );
    buttonObj.visibilityWithContainsObj(
      newsletterModule.button().xpath.cancel,
      newsletterModule.button().value.cancel
    );
  });

  it("Edit", () => {
    tableObj.clickTableButtonObj(
      newsletterModule.tableBody(),
      cmsDataPath().newsletter,
      "main",
      "Edit"
    );

    editFakerObj.fakerObj(cmsDataPath().newsletter, "faker");
    formObj.fillFormObj(
      newsletterModule.editNewslettersPageForm(),
      cmsDataPath().newsletter,
      "faker"
    );
    buttonObj.clickButtonWithContainsObj(
      newsletterModule.button().xpath.update,
      newsletterModule.button().value.update
    );

    grabTextObj.compareAlertMessageObj(
      newsletterModule.alertMessage().xpath.editAlert,
      newsletterModule.alertMessage().value.editAlert
    );
    editFakerObj.storeObj(cmsDataPath().newsletter, "main");
  });

  it("Delete", () => {
    tableObj.clickTableButtonObj(
      newsletterModule.tableBody(),
      cmsDataPath().newsletter,
      "main",
      "Delete"
    );

    grabTextObj.deleteConfirmModal(
      newsletterModule.confirmModal().xpath.modalLable,
      newsletterModule.confirmModal().value.modalLable
    );

    grabTextObj.deleteConfirmModal(
      newsletterModule.confirmModal().xpath.modalDesc,
      newsletterModule.confirmModal().value.modalDesc
    );

    buttonObj.visibilityWithContainsObj(
      newsletterModule.button().xpath.confirm,
      newsletterModule.button().value.confirm
    );
    buttonObj.visibilityWithContainsObj(
      newsletterModule.button().xpath.close,
      newsletterModule.button().value.close
    );
    buttonObj.clickButtonWithContainsObj(
      newsletterModule.button().xpath.confirm,
      newsletterModule.button().value.confirm
    );
    // grabTextObj.compareAlertMessageObj(
    //   newsletterModule.alertMessage().xpath.deleteAlert,
    //   newsletterModule.alertMessage().value.deleteAlert
    // );
  });
});
