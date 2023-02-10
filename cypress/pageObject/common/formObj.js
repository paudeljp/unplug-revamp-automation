import formFields from "../../../../picklezone/cypress/page/formFields";
import actionButton from "../../../../picklezone/cypress/page/actionButton";
import allAssertions from "../../../../picklezone/cypress/page/allAssertions";
import grabTextPage from "../../../../picklezone/cypress/page/grabTextPage";

const formP = new formFields();
const actionB = new actionButton();
const assertionP = new allAssertions();
const grabTextP = new grabTextPage();

export function checkFormStatusObj(xpathObj) {
  var xpath = null;
  for (let index = 0; index < Object.keys(xpathObj.field).length; index++) {
    if (
      JSON.stringify(xpathObj.xpath[Object.keys(xpathObj.field)[index]]).split(
        ","
      ).length > 1
    ) {
      xpath = xpathObj.xpath[Object.keys(xpathObj.field)[index]][0];
    }
    if (
      JSON.stringify(xpathObj.xpath[Object.keys(xpathObj.field)[index]]).split(
        ","
      ).length == 1
    ) {
      xpath = xpathObj.xpath[Object.keys(xpathObj.field)[index]];
    }
    //!Check isPresent
    if (xpathObj.status[Object.keys(xpathObj.field)[index]].isPresent) {
      assertionP.exists(xpath);
    }

    //!Check Visibility
    if (xpathObj.status[Object.keys(xpathObj.field)[index]].visibility) {
      assertionP.visibilityWithoutContains(xpath);
    }

    //!Check Disabled
    if (xpathObj.status[Object.keys(xpathObj.field)[index]].disabled) {
      assertionP.disabled(xpath);
    }

    //!Check ReadOnly
    if (xpathObj.status[Object.keys(xpathObj.field)[index]].readOnly) {
      assertionP.readOnly(xpath);
    }
  }
}

export function fillFormObj(xpathObj, filePath, environment) {
  cy.checkAndReadFile(filePath).then((response) => {
    for (let count = 0; count < response.data.length; count++) {
      if (response.data[count].environment == environment) {
        for (
          let index = 0;
          index < Object.keys(xpathObj.field).length;
          index++
        ) {
          if (
            xpathObj.status[Object.keys(xpathObj.field)[index]].disabled ==
              false &&
            xpathObj.status[Object.keys(xpathObj.field)[index]].readOnly ==
              false
          ) {
            formP[xpathObj.field[Object.keys(xpathObj.field)[index]]](
              xpathObj.xpath[Object.keys(xpathObj.field)[index]],
              response.data[count][Object.keys(xpathObj.field)[index]]
            );
          }
        }
      }
    }
  });
}

export function compareFormDataObj(xpathObj, filePath, environment) {
  cy.checkAndReadFile(filePath).then((response) => {
    for (let count = 0; count < response.data.length; count++) {
      if (response.data[count].environment == environment) {
        for (
          let index = 0;
          index < Object.keys(xpathObj.field).length;
          index++
        ) {
          if (
            xpathObj.status[Object.keys(xpathObj.field)[index]].compare == true
          ) {
            assertionP[xpathObj.field[Object.keys(xpathObj.field)[index]]](
              xpathObj.xpath[Object.keys(xpathObj.field)[index]],
              response.data[count][Object.keys(xpathObj.field)[index]]
            );
          }
        }
      }
    }
  });
}

export function validateFormObj(
  xpathObj,
  filePath,
  buttonXpath,
  buttonValue,
  environment
) {
  cy.checkAndReadFile(filePath).then((response) => {
    for (let count = 0; count < response.data.length; count++) {
      if (response.data[count].environment == environment) {
        for (
          let index = 0;
          index < Object.keys(xpathObj.validation).length;
          index++
        ) {
          for (
            let j = 0;
            j <
            xpathObj.validation[[Object.keys(xpathObj.validation)[index]]]
              .length;
            j++
          ) {
            formP[xpathObj.field[Object.keys(xpathObj.validation)[index]]](
              xpathObj.xpath[Object.keys(xpathObj.validation)[index]],
              xpathObj.validation[[Object.keys(xpathObj.validation)[index]]][j]
                .value
            );
            if (
              xpathObj.validation[[Object.keys(xpathObj.validation)[index]]][j]
                .requiresSubmit == true
            ) {
              actionB.buttonWithContains(buttonXpath, buttonValue);
            }
            grabTextP
              .grabSingleText(
                xpathObj.validation[[Object.keys(xpathObj.validation)[index]]][
                  j
                ].xpath
              )
              .then((response) => {
                expect(response).to.equal(
                  xpathObj.validation[
                    [Object.keys(xpathObj.validation)[index]]
                  ][j].message
                );
              })
              .wait(1000);
            formP[xpathObj.field[Object.keys(xpathObj.validation)[index]]](
              xpathObj.xpath[Object.keys(xpathObj.validation)[index]],
              response.data[count][Object.keys(xpathObj.validation)[index]]
            );
          }
        }
      }
    }
  });
}
