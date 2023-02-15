//!Helpers
import { cmsDataPath } from "../../../helpers/dataPath";

import * as loginModule from "../../../helpers/cms/login";
import * as timerSoundsModule from "../../../helpers/cms/timerSounds/timerSounds";

//!Common PageObject
import * as buttonObj from "../../../pageObject/common/buttonObj";
import * as visitObj from "../../../pageObject/common/visitObj";
import * as formObj from "../../../pageObject/common/formObj";
import * as grabTextObj from "../../../pageObject/common/grabTextObj";
import * as tableObj from "../../../pageObject/common/tableObj";

//!Required PageObject
import * as createFakerObj from "../../../pageObject/cms/timerSounds/faker/createModule";
import * as editFakerObj from "../../../pageObject/cms/timerSounds/faker/editModule";

import { loginWithSessionObj } from "../../../pageObject/cms/login/loginObj";

describe("Timer Sounds Module", () => {
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
      timerSoundsModule.button().xpath.mainTab,
      timerSoundsModule.button().value.mainTab
    );
  });
  it("Check Visibility in Main", () => {
    visitObj.verifyURLObj(timerSoundsModule.urls().mainPage);
    grabTextObj.comparePageTitleObj(
      timerSoundsModule.pageTitle().xpath.mainPage,
      timerSoundsModule.pageTitle().value.mainPage
    );

    grabTextObj.compareTableHeadingObj(
      timerSoundsModule.tableHead().xpath.timerSoundsTable,
      timerSoundsModule.tableHead().value.timerSoundsTable
    );

    buttonObj.visibilityWithContainsObj(
      timerSoundsModule.button().xpath.addNew,
      timerSoundsModule.button().value.addNew
    );
  });

  it("Check Visibility in Create", () => {
    buttonObj.clickButtonWithContainsObj(
      timerSoundsModule.button().xpath.addNew,
      timerSoundsModule.button().value.addNew
    );
    visitObj.verifyURLObj(timerSoundsModule.urls().createPage);
    grabTextObj.comparePageTitleObj(
      timerSoundsModule.pageTitle().xpath.createPage,
      timerSoundsModule.pageTitle().value.createPage
    );

    grabTextObj.compareBreadCrumbsObj(
      timerSoundsModule.breadCrumbs().xpath.createPage,
      timerSoundsModule.breadCrumbs().value.createPage
    );

    formObj.checkFormStatusObj(timerSoundsModule.createTimerSoundPageForm());

    buttonObj.visibilityWithContainsObj(
      timerSoundsModule.button().xpath.save,
      timerSoundsModule.button().value.save
    );
    buttonObj.visibilityWithContainsObj(
      timerSoundsModule.button().xpath.cancel,
      timerSoundsModule.button().value.cancel
    );
  });

  it("Create", () => {
    buttonObj.clickButtonWithContainsObj(
      timerSoundsModule.button().xpath.addNew,
      timerSoundsModule.button().value.addNew
    );

    createFakerObj.fakerObj(cmsDataPath().timerSounds, "faker");

    formObj.fillFormObj(
      timerSoundsModule.createTimerSoundPageForm(),
      cmsDataPath().timerSounds,
      "faker"
    );

    buttonObj.clickButtonWithContainsObj(
      timerSoundsModule.button().xpath.save,
      timerSoundsModule.button().value.save
    );

    grabTextObj.compareAlertMessageObj(
      timerSoundsModule.alertMessage().xpath.createTimeSound,
      timerSoundsModule.alertMessage().value.createTimeSound
    );
    createFakerObj.storeObj(cmsDataPath().timerSounds, "main");

    tableObj.compareTableDataObj(
      timerSoundsModule.tableBody(),
      cmsDataPath().timerSounds,
      "main"
    );
  });

  it("Check Visibility in Edit", () => {
    cy.readFile(cmsDataPath().timerSounds).then((res) => {
      buttonObj.clickButtonWithContainsObj(
        timerSoundsModule.button().xpath.tableData,
        res.data[1].title
      );
    });

    grabTextObj.comparePageTitleObj(
      timerSoundsModule.pageTitle().xpath.editPage,
      timerSoundsModule.pageTitle().value.editPage
    );
    grabTextObj.compareBreadCrumbsObj(
      timerSoundsModule.breadCrumbs().xpath.editPage,
      timerSoundsModule.breadCrumbs().value.editPage
    );

    formObj.checkFormStatusObj(timerSoundsModule.editTimerSoundPageForm());

    formObj.compareFormDataObj(
      timerSoundsModule.editTimerSoundPageForm(),
      cmsDataPath().timerSounds,
      "main"
    );

    buttonObj.visibilityWithContainsObj(
      timerSoundsModule.button().xpath.update,
      timerSoundsModule.button().value.update
    );
    buttonObj.visibilityWithContainsObj(
      timerSoundsModule.button().xpath.cancel,
      timerSoundsModule.button().value.cancel
    );
    buttonObj.visibilityWithContainsObj(
      timerSoundsModule.button().xpath.replaceThisTimerSoundBtn,
      timerSoundsModule.button().value.replaceThisTimerSoundBtn
    );
  });

  it("Edit", () => {
    cy.readFile(cmsDataPath().timerSounds).then((res) => {
      buttonObj.clickButtonWithContainsObj(
        timerSoundsModule.button().xpath.tableData,
        res.data[1].title
      );
    });

    buttonObj.clickButtonWithContainsObj(
      timerSoundsModule.button().xpath.replaceThisTimerSoundBtn,
      timerSoundsModule.button().value.replaceThisTimerSoundBtn
    );

    editFakerObj.fakerObj(cmsDataPath().timerSounds, "faker");
    formObj.fillFormObj(
      timerSoundsModule.editTimerSoundPageForm(),
      cmsDataPath().timerSounds,
      "faker"
    );
    buttonObj.clickButtonWithContainsObj(
      timerSoundsModule.button().xpath.update,
      timerSoundsModule.button().value.update
    );

    grabTextObj.compareAlertMessageObj(
      timerSoundsModule.alertMessage().xpath.editAlert,
      timerSoundsModule.alertMessage().value.editAlert
    );
    editFakerObj.storeObj(cmsDataPath().timerSounds, "main");
  });

  it("Delete", () => {
    tableObj.clickTableButtonObj(
      timerSoundsModule.tableBody(),
      cmsDataPath().timerSounds,
      "main",
      "Delete"
    );

    grabTextObj.deleteConfirmModal(
      timerSoundsModule.confirmModal().xpath.modalLable,
      timerSoundsModule.confirmModal().value.modalLable
    );

    grabTextObj.deleteConfirmModal(
      timerSoundsModule.confirmModal().xpath.modalDesc,
      timerSoundsModule.confirmModal().value.modalDesc
    );

    buttonObj.visibilityWithContainsObj(
      timerSoundsModule.button().xpath.delete,
      timerSoundsModule.button().value.delete
    );
    buttonObj.visibilityWithContainsObj(
      timerSoundsModule.button().xpath.close,
      timerSoundsModule.button().value.close
    );
    buttonObj.clickButtonWithContainsObj(
      timerSoundsModule.button().xpath.confirm,
      timerSoundsModule.button().value.confirm
    );
    grabTextObj.compareAlertMessageObj(
      timerSoundsModule.alertMessage().xpath.deleteAlert,
      timerSoundsModule.alertMessage().value.deleteAlert
    );
  });
});
