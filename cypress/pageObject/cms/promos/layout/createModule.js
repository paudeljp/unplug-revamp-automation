import * as createModule from "../faker/createModule";

export function createSingleStripePromoObj() {
  createModule.singleStripePromoFakerObj();
  createModule.singleStripePromoStoreObj();
}

export function createMultipleStripePromoObj() {
  createModule.multipleStripePromoFakerObj();
  createModule.multipleStripePromoStoreObj();
}

export function createTeamPromoObj() {
  createModule.teamPromoFakerObj();
  createModule.teamPromoStoreObj();
}
