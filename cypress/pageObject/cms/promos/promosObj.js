import * as createModule from "./layout/createModule";
import * as editModule from "./layout/editModule";

class promosModule {
  init() {
    if (0 == 0) {
      context("Create Single Stripe Promo", () => {
        createModule.createSingleStripePromoObj();
      });
    }

    if (0 == 0) {
      context("Edit Single Stripe Promo", () => {
        editModule.editSingleStripePromoObj();
      });
    }

    if (0 == 0) {
      context("Create Multiple Stripe Promo", () => {
        createModule.createMultipleStripePromoObj();
      });
    }

    if (0 == 0) {
      context("Edit Multiple Stripe Promo", () => {
        editModule.editMultipleStripePromoObj();
      });
    }

    if (0 == 0) {
      context("Create Team Promo", () => {
        createModule.createTeamPromoObj();
      });
    }

    if (0 == 0) {
      context("Edit Team Promo", () => {
        editModule.editTeamPromoObj();
      });
    }
  }
}

export default promosModule;
