import actionButton from "../../page/actionButton";
import allAssertions from "../../page/allAssertions";

const actionB = new actionButton();
const assertionP = new allAssertions();

//!Contains
export function visibilityWithContainsObj(xpath, value) {
    
    assertionP.visibilityWithContains(xpath, value);
}

export function clickButtonWithContainsObj(xpath, value) {
    actionB.buttonWithContains(xpath, value)
}

//!Without Contains
export function visibilityWithoutContainsObj(xpath) {
    assertionP.visibilityWithoutContains(xpath);
}

export function clickButtonWithoutContainsObj(xpath) {
    actionB.buttonWithoutContains(xpath)
}

//!Cancel Pageload
export function clickPageLoadButtonWithContainsObj(xpath, value) {
    actionB.pageLoadButtonWithContains(xpath, value)
}

export function clickPageLoadButtonWithoutContainsObj(xpath) {
    actionB.pageLoadButtonWithoutContains(xpath)
}