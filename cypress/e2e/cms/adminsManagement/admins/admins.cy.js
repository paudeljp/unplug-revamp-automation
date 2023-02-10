import { getEnvVariables } from "../../../../helpers/environment";

describe("Admins Module", () => {
  it("", () => {
    cy.visit(getEnvVariables("cmsURL"));
  });
});
