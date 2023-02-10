/**
 *
 * @param {string} filpath email save file path
 */
export function createEmail(filpath) {
  cy.task("checkFileExists", filpath).then((bool) => {
    if (!bool) {
      cy.mailslurp()
        .then((mailslurp) => mailslurp.createInbox())
        .then((inbox) => {
          expect(inbox.emailAddress).to.contain("@mailslurp");
          cy.writeFile(filpath, inbox);
        });
    } else {
      cy.log("Email Already create!!!");
    }
  });
}
/**
 *
 * @param {*} filepath receive email
 * @returns
 */
export function receiveEmails(filepath) {
  return cy.readFile(filepath).then((res) => {
    cy.mailslurp()
      .then((mailslurp) => mailslurp.waitForLatestEmail(res.id, 30000))
      .then((res) => {
        return res;
      });
  });
}
