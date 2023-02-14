import grabTextPage from "../../page/grabTextPage";
import allAssertions from "../../page/allAssertions";
import {
  clickButtonWithContainsObj,
  clickButtonWithoutContainsObj,
} from "../common/buttonObj";

const grabTextP = new grabTextPage();
const allAssertion = new allAssertions();

export function comparePageTitleObj(xpath, value) {
  grabTextP.grabSingleText(xpath).then((response) => {
    expect(response).to.equal(value.trim());
  });
}

export function compareBreadCrumbsObj(xpath, value) {
  grabTextP.grabMulitipleText(xpath).then((response) => {
    expect(response).to.deep.equal(value);
  });
}

export function compareAlertMessageObj(xpath, value) {
  grabTextP.grabSingleText(xpath[0]).then((response) => {
    if (JSON.stringify(response) == JSON.stringify(value[0])) {
      expect(response).to.equal(value[0].trim());
    } else {
      allAssertion.containsText(xpath[0], value[0]);
    }
  });
  if (value[1] != null) {
    clickButtonWithContainsObj(xpath[1], value[1]);
  } else {
    clickButtonWithoutContainsObj(xpath[1]);
  }
}

export function compareTableHeadingObj(xpath, value) {
  grabTextP.grabMulitipleText(xpath).then((response) => {
    expect(response).to.deep.equal(value);
  });
}

export function emptyTableObj(xpath, value) {
  grabTextP.grabSingleText(xpath).then((response) => {
    expect(response).to.equal(value);
  });
}

export function grabTextFromJsonObj(filePath, string, value) {
  return grabTextP
    .grabTextFromJson(filePath, string, value)
    .then((response) => {
      return response.data;
    });
}

export function deleteConfirmModal(xpath, value) {
  grabTextP.grabSingleText(xpath).then((response) => {
    expect(response).to.equal(value.trim());
  });
}
