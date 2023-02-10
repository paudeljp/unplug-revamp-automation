import './commands'
import "cypress-mailslurp";

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})