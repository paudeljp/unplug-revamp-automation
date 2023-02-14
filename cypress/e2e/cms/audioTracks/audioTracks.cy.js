//!Helpers
import { cmsDataPath } from "../../../helpers/dataPath";

import * as loginModule from "../../../helpers/cms/login";
import * as audioTracksModule from "../../../helpers/cms/audioTracks/audioTracks";

//!Common PageObject
import * as buttonObj from "../../../pageObject/common/buttonObj";
import * as visitObj from "../../../pageObject/common/visitObj";
import * as formObj from "../../../pageObject/common/formObj";
import * as grabTextObj from "../../../pageObject/common/grabTextObj";
import * as tableObj from "../../../pageObject/common/tableObj";

//!Required PageObject
import * as createFakerObj from "../../../pageObject/cms/audioTracks/faker/createModule";
import * as editFakerObj from "../../../pageObject/cms/audioTracks/faker/editModule";

import { loginWithSessionObj } from "../../../pageObject/cms/login/loginObj";

describe("Audio Tracks Module", () => {
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
      audioTracksModule.button().xpath.mainTab,
      audioTracksModule.button().value.mainTab
    );
  });
  it("Check Visibility in Main", () => {
    visitObj.verifyURLObj(audioTracksModule.urls().mainPage);
    grabTextObj.comparePageTitleObj(
      audioTracksModule.pageTitle().xpath.mainPage,
      audioTracksModule.pageTitle().value.mainPage
    );

    grabTextObj.compareTableHeadingObj(
      audioTracksModule.tableHead().xpath.audioTracksTable,
      audioTracksModule.tableHead().value.audioTracksTable
    );
  });

  it("Check Visibility in Create", () => {
    buttonObj.clickButtonWithContainsObj(
      audioTracksModule.button().xpath.addNew,
      audioTracksModule.button().value.addNew
    );
    visitObj.verifyURLObj(audioTracksModule.urls().createPage);
    grabTextObj.comparePageTitleObj(
      audioTracksModule.pageTitle().xpath.createPage,
      audioTracksModule.pageTitle().value.createPage
    );

    grabTextObj.compareBreadCrumbsObj(
      audioTracksModule.breadCrumbs().xpath.createPage,
      audioTracksModule.breadCrumbs().value.createPage
    );

    formObj.checkFormStatusObj(audioTracksModule.createAudioTracksPageForm());

    buttonObj.visibilityWithContainsObj(
      audioTracksModule.button().xpath.save,
      audioTracksModule.button().value.save
    );
    buttonObj.visibilityWithContainsObj(
      audioTracksModule.button().xpath.cancel,
      audioTracksModule.button().value.cancel
    );
  });

  it("Create", () => {
    buttonObj.clickButtonWithContainsObj(
      audioTracksModule.button().xpath.addNew,
      audioTracksModule.button().value.addNew
    );

    createFakerObj.fakerObj(cmsDataPath().audioTracks, "faker");

    formObj.fillFormObj(
      audioTracksModule.createAudioTracksPageForm(),
      cmsDataPath().audioTracks,
      "faker"
    );

    buttonObj.clickButtonWithContainsObj(
      audioTracksModule.button().xpath.save,
      audioTracksModule.button().value.save
    );

    grabTextObj.compareAlertMessageObj(
      audioTracksModule.alertMessage().xpath.createAudioTracks,
      audioTracksModule.alertMessage().value.createAudioTracks
    );
    createFakerObj.storeObj(cmsDataPath().audioTracks, "main");

    tableObj.compareTableDataObj(
      audioTracksModule.tableBody(),
      cmsDataPath().audioTracks,
      "main"
    );
  });

  it("Check Visibility in Edit", () => {
    cy.readFile(cmsDataPath().audioTracks).then((res) => {
      buttonObj.clickButtonWithContainsObj(
        audioTracksModule.button().xpath.tableData,
        res.data[1].name
      );
    });

    buttonObj.clickButtonWithContainsObj(
      audioTracksModule.button().xpath.replaceFilesBtn,
      audioTracksModule.button().value.replaceFilesBtn
    );

    grabTextObj.comparePageTitleObj(
      audioTracksModule.pageTitle().xpath.editPage,
      audioTracksModule.pageTitle().value.editPage
    );
    grabTextObj.compareBreadCrumbsObj(
      audioTracksModule.breadCrumbs().xpath.editPage,
      audioTracksModule.breadCrumbs().value.editPage
    );

    formObj.checkFormStatusObj(audioTracksModule.editAudioTracksPageForm());
    formObj.compareFormDataObj(
      audioTracksModule.editAudioTracksPageForm(),
      cmsDataPath().audioTracks,
      "main"
    );

    buttonObj.visibilityWithContainsObj(
      audioTracksModule.button().xpath.update,
      audioTracksModule.button().value.update
    );
    buttonObj.visibilityWithContainsObj(
      audioTracksModule.button().xpath.cancel,
      audioTracksModule.button().value.cancel
    );
  });

  it("Edit", () => {
    cy.readFile(cmsDataPath().audioTracks).then((res) => {
      buttonObj.clickButtonWithContainsObj(
        audioTracksModule.button().xpath.tableData,
        res.data[1].name
      );
    });

    buttonObj.clickButtonWithContainsObj(
      audioTracksModule.button().xpath.replaceFilesBtn,
      audioTracksModule.button().value.replaceFilesBtn
    );
    editFakerObj.fakerObj(cmsDataPath().audioTracks, "faker");
    formObj.fillFormObj(
      audioTracksModule.editAudioTracksPageForm(),
      cmsDataPath().audioTracks,
      "faker"
    );
    buttonObj.clickButtonWithContainsObj(
      audioTracksModule.button().xpath.update,
      audioTracksModule.button().value.update
    );

    grabTextObj.compareAlertMessageObj(
      audioTracksModule.alertMessage().xpath.editAlert,
      audioTracksModule.alertMessage().value.editAlert
    );
    editFakerObj.storeObj(cmsDataPath().audioTracks, "main");
  });

  it("Delete", () => {
    tableObj.clickTableButtonObj(
      audioTracksModule.tableBody(),
      cmsDataPath().audioTracks,
      "main",
      "Delete"
    );

    grabTextObj.deleteConfirmModal(
      audioTracksModule.confirmModal().xpath.modalLable,
      audioTracksModule.confirmModal().value.modalLable
    );

    grabTextObj.deleteConfirmModal(
      audioTracksModule.confirmModal().xpath.modalDesc,
      audioTracksModule.confirmModal().value.modalDesc
    );

    buttonObj.visibilityWithContainsObj(
      audioTracksModule.button().xpath.delete,
      audioTracksModule.button().value.delete
    );
    buttonObj.visibilityWithContainsObj(
      audioTracksModule.button().xpath.close,
      audioTracksModule.button().value.close
    );
    buttonObj.clickButtonWithContainsObj(
      audioTracksModule.button().xpath.confirm,
      audioTracksModule.button().value.confirm
    );
    grabTextObj.compareAlertMessageObj(
      audioTracksModule.alertMessage().xpath.deleteAlert,
      audioTracksModule.alertMessage().value.deleteAlert
    );
  });
});
