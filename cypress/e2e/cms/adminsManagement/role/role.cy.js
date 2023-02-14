//!Helpers
import { cmsDataPath } from "../../../../helpers/dataPath";
import * as loginModule from "../../../../helpers/cms/login";
import * as roleModule from "../../../../helpers/cms/adminsManagement/role/roles";

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

describe("Role Module", () => {
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
      roleModule.button().xpath.mainTab,
      roleModule.button().value.mainTab
    );
    buttonObj.clickButtonWithContainsObj(
      roleModule.button().xpath.subTab,
      roleModule.button().value.subTab
    );
  });
  it("Check Visibility in Main", () => {
    visitObj.verifyURLObj(roleModule.urls().mainPage);
    grabTextObj.comparePageTitleObj(
      roleModule.pageTitle().xpath.mainPage,
      roleModule.pageTitle().value.mainPage
    );

    grabTextObj.compareTableHeadingObj(
      roleModule.tableHead().xpath.mainPage,
      roleModule.tableHead().value.mainPage
    );
  });

  it("Check Visibility in Create", () => {
    buttonObj.clickButtonWithContainsObj(
      roleModule.button().xpath.addNew,
      roleModule.button().value.addNew
    );
    visitObj.verifyURLObj(roleModule.urls().createPage);
    grabTextObj.comparePageTitleObj(
      roleModule.pageTitle().xpath.createPage,
      roleModule.pageTitle().value.createPage
    );

    grabTextObj.compareBreadCrumbsObj(
      roleModule.breadCrumbs().xpath.createPage,
      roleModule.breadCrumbs().value.createPage
    );

    formObj.checkFormStatusObj(roleModule.createForm());

    buttonObj.visibilityWithContainsObj(
      roleModule.button().xpath.save,
      roleModule.button().value.save
    );
    buttonObj.visibilityWithContainsObj(
      roleModule.button().xpath.cancel,
      roleModule.button().value.cancel
    );
  });

  it("Create", () => {
    buttonObj.clickButtonWithContainsObj(
      roleModule.button().xpath.addNew,
      roleModule.button().value.addNew
    );

    createFakerObj.fakerObj(cmsDataPath().role, "faker");

    formObj.fillFormObj(roleModule.createForm(), cmsDataPath().role, "faker");

    buttonObj.clickButtonWithContainsObj(
      roleModule.button().xpath.save,
      roleModule.button().value.save
    );

    grabTextObj.compareAlertMessageObj(
      roleModule.alertMessage().xpath.createAlert,
      roleModule.alertMessage().value.createAlert
    );
    createFakerObj.storeObj(cmsDataPath().role, "main");

    tableObj.compareTableDataObj(
      roleModule.tableBody(),
      cmsDataPath().role,
      "main"
    );
  });

  it("Check Visibility in Edit", () => {
    tableObj.clickTableButtonObj(
      roleModule.tableBody(),
      cmsDataPath().role,
      "main",
      "Edit"
    );

    grabTextObj.comparePageTitleObj(
      roleModule.pageTitle().xpath.editPage,
      roleModule.pageTitle().value.editPage
    );
    grabTextObj.compareBreadCrumbsObj(
      roleModule.breadCrumbs().xpath.editPage,
      roleModule.breadCrumbs().value.editPage
    );

    formObj.checkFormStatusObj(roleModule.editForm());
    formObj.compareFormDataObj(
      roleModule.editForm(),
      cmsDataPath().role,
      "main"
    );

    buttonObj.visibilityWithContainsObj(
      roleModule.button().xpath.save,
      roleModule.button().value.save
    );
    buttonObj.visibilityWithContainsObj(
      roleModule.button().xpath.cancel,
      roleModule.button().value.cancel
    );
  });

  it("Edit", () => {
    tableObj.clickTableButtonObj(
      roleModule.tableBody(),
      cmsDataPath().role,
      "main",
      "Edit"
    );

    editFakerObj.fakerObj(cmsDataPath().role, "faker");
    formObj.fillFormObj(roleModule.editForm(), cmsDataPath().role, "faker");
    buttonObj.clickButtonWithContainsObj(
      roleModule.button().xpath.save,
      roleModule.button().value.save
    );

    grabTextObj.compareAlertMessageObj(
      roleModule.alertMessage().xpath.editAlert,
      roleModule.alertMessage().value.editAlert
    );
    editFakerObj.storeObj(cmsDataPath().role, "main");
  });

  it("Delete", () => {
    tableObj.clickTableButtonObj(
      roleModule.tableBody(),
      cmsDataPath().role,
      "main",
      "Delete"
    );

    grabTextObj.deleteConfirmModal(
      roleModule.confirmModal().xpath.modalLable,
      roleModule.confirmModal().value.modalLable
    );

    grabTextObj.deleteConfirmModal(
      roleModule.confirmModal().xpath.modalDesc,
      roleModule.confirmModal().value.modalDesc
    );

    buttonObj.visibilityWithContainsObj(
      roleModule.button().xpath.delete,
      roleModule.button().value.delete
    );
    buttonObj.visibilityWithContainsObj(
      roleModule.button().xpath.close,
      roleModule.button().value.close
    );
    buttonObj.clickButtonWithContainsObj(
      roleModule.button().xpath.confirm,
      roleModule.button().value.confirm
    );
    grabTextObj.compareAlertMessageObj(
      roleModule.alertMessage().xpath.deleteAlert,
      roleModule.alertMessage().value.deleteAlert
    );
  });
});
