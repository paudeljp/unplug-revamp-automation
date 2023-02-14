//!Helpers
import { cmsDataPath } from "../../../../helpers/dataPath";
import * as loginModule from "../../../../helpers/cms/login";
import * as adminsModule from "../../../../helpers/cms/adminsManagement/admins/admins";

//!Common PageObject
import * as buttonObj from "../../../../pageObject/common/buttonObj";
import * as visitObj from "../../../../pageObject/common/visitObj";
import * as formObj from "../../../../pageObject/common/formObj";
import * as grabTextObj from "../../../../pageObject/common/grabTextObj";
import * as tableObj from "../../../../pageObject/common/tableObj";

//!Required PageObject
import * as createFakerObj from "../../../../pageObject/cms/adminsManagement/admins/faker/createModule";
import * as editFakerObj from "../../../../pageObject/cms/adminsManagement/admins/faker/editModule";
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
  it("Check Visibility in Main", () => {
    visitObj.verifyURLObj(adminsModule.urls().adminsPage);
    grabTextObj.comparePageTitleObj(
      adminsModule.pageTitle().xpath.mainPage,
      adminsModule.pageTitle().value.mainPage
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
      adminsModule.pageTitle().xpath.createPage,
      adminsModule.pageTitle().value.createPage
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

  it("Check Visibility in Edit", () => {
    tableObj.clickTableButtonObj(
      adminsModule.tableBody(),
      cmsDataPath().admins,
      "main",
      "Edit"
    );

    grabTextObj.comparePageTitleObj(
      adminsModule.pageTitle().xpath.editPage,
      adminsModule.pageTitle().value.editPage
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

    editFakerObj.fakerObj(cmsDataPath().admins, "faker");
    formObj.fillFormObj(adminsModule.editForm(), cmsDataPath().admins, "faker");
    buttonObj.clickButtonWithContainsObj(
      adminsModule.button().xpath.update,
      adminsModule.button().value.update
    );

    grabTextObj.compareAlertMessageObj(
      adminsModule.alertMessage().xpath.editAlert,
      adminsModule.alertMessage().value.editAlert
    );
    editFakerObj.storeObj(cmsDataPath().admins, "main");

    buttonObj.visibilityWithContainsObj(
      adminsModule.button().xpath.update,
      adminsModule.button().value.update
    );
    buttonObj.visibilityWithContainsObj(
      adminsModule.button().xpath.cancel,
      adminsModule.button().value.cancel
    );
  });

  it("Check Visibility in Change Password", () => {
    tableObj.clickTableButtonObj(
      adminsModule.tableBody(),
      cmsDataPath().admins,
      "main",
      "Change Password"
    );

    visitObj.verifyURLObj(adminsModule.urls().changePasswordPage);

    grabTextObj.comparePageTitleObj(
      adminsModule.pageTitle().xpath.changePassword,
      adminsModule.pageTitle().value.changePassword
    );

    grabTextObj.compareBreadCrumbsObj(
      adminsModule.breadCrumbs().xpath.changePassword,
      adminsModule.breadCrumbs().value.changePassword
    );

    grabTextObj.compareTableHeadingObj(
      adminsModule.changePasswordTableHead().xpath.head,
      adminsModule.changePasswordTableHead().value.head
    );

    formObj.checkFormStatusObj(adminsModule.changePasswordForm());
    buttonObj.visibilityWithContainsObj(
      adminsModule.button().xpath.save,
      adminsModule.button().value.save
    );
    buttonObj.visibilityWithContainsObj(
      adminsModule.button().xpath.cancel,
      adminsModule.button().value.cancel
    );
  });

  it("Change Password", () => {
    tableObj.clickTableButtonObj(
      adminsModule.tableBody(),
      cmsDataPath().admins,
      "main",
      "Change Password"
    );

    formObj.fillFormObj(
      adminsModule.changePasswordForm(),
      cmsDataPath().changePassowrd,
      "main"
    );

    buttonObj.clickButtonWithContainsObj(
      adminsModule.button().xpath.save,
      adminsModule.button().value.save
    );

    grabTextObj.compareAlertMessageObj(
      adminsModule.alertMessage().xpath.changePassword,
      adminsModule.alertMessage().value.changePassword
    );
  });
  it("Delete", () => {
    tableObj.clickTableButtonObj(
      adminsModule.tableBody(),
      cmsDataPath().admins,
      "main",
      "Delete"
    );

    grabTextObj.deleteConfirmModal(
      adminsModule.confirmModal().xpath.modalLable,
      adminsModule.confirmModal().value.modalLable
    );

    grabTextObj.deleteConfirmModal(
      adminsModule.confirmModal().xpath.modalDesc,
      adminsModule.confirmModal().value.modalDesc
    );

    buttonObj.visibilityWithContainsObj(
      adminsModule.button().xpath.confirm,
      adminsModule.button().value.confirm
    );
    buttonObj.visibilityWithContainsObj(
      adminsModule.button().xpath.close,
      adminsModule.button().value.close
    );

    buttonObj.clickButtonWithContainsObj(
      adminsModule.button().xpath.confirm,
      adminsModule.button().value.confirm
    );
    grabTextObj.compareAlertMessageObj(
      adminsModule.alertMessage().xpath.deleteAlert,
      adminsModule.alertMessage().value.deleteAlert
    );
  });
});
