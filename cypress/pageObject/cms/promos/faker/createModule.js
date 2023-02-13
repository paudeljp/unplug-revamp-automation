import { faker } from "@faker-js/faker";

export function singleStripePromoFakerObj(dataPath, string) {
  let date = new Date();

  let yyyy = date.getFullYear();
  let mm = (date.getMonth() + 1).toString().padStart(2, 0);
  let dd = date.getDate().toString().padStart(2, 0);
  cy.checkAndReadFile(dataPath, (err, datas) => {
    if (err) {
      return cy.log(err);
    }
  }).then((datas) => {
    for (let index = 0; index < datas.data.length; index++) {
      if (datas.data[index].environment == string) {
        datas.data[index].coupon_name = Date.now() + " coupon name";
        datas.data[index].coupon_code = faker.random
          .alphaNumeric(8)
          .toUpperCase();
        datas.data[index].discount = "percent";
        datas.data[index].percentage_off = faker.datatype.number({
          min: 10,
          max: 99,
        });
        datas.data[index].maximum_redemption = faker.datatype.number({
          min: 10,
          max: 99,
        });
        datas.data[index].coupon_expiry_date = `${mm}${dd}${yyyy}`;
        datas.data[index].plan = "Yearly";
        datas.data[index].duration = "Forever";
        cy.writeFile(dataPath, datas);
      }
    }
  });
}

export function multipleStripePromoFakerObj(dataPath, string) {
  let date = new Date();

  let yyyy = date.getFullYear();
  let mm = (date.getMonth() + 1).toString().padStart(2, 0);
  let dd = date.getDate().toString().padStart(2, 0);
  cy.checkAndReadFile(dataPath, (err, datas) => {
    if (err) {
      return cy.log(err);
    }
  }).then((datas) => {
    for (let index = 0; index < datas.data.length; index++) {
      if (datas.data[index].environment == string) {
        datas.data[index].coupon_name = Date.now() + " coupon name";
        datas.data[index].number_of_coupon = faker.datatype.number({
          min: 10,
          max: 20,
        });

        datas.data[index].percentage_off = faker.datatype.number({
          min: 10,
          max: 99,
        });
        datas.data[index].maximum_redemption = faker.datatype.number({
          min: 10,
          max: 99,
        });
        datas.data[index].coupon_expiry_date = `${mm}${dd}${yyyy}`;
        datas.data[index].plan = "Yearly";
        datas.data[index].duration = "Forever";
        cy.writeFile(dataPath, datas);
      }
    }
  });
}

export function teamPromoFakerObj(dataPath, string) {
  let date = new Date();

  let yyyy = date.getFullYear();
  let mm = (date.getMonth() + 1).toString().padStart(2, 0);
  let dd = date.getDate().toString().padStart(2, 0);
  cy.checkAndReadFile(dataPath, (err, datas) => {
    if (err) {
      return cy.log(err);
    }
  }).then((datas) => {
    for (let index = 0; index < datas.data.length; index++) {
      if (datas.data[index].environment == string) {
        datas.data[index].company_name = Date.now() + " Pvt Ltd";

        datas.data[index].company_promo_code = faker.random
          .alphaNumeric(8)
          .toUpperCase();

        datas.data[index].team_name = Date.now() + " Team";
        datas.data[index].team_email = faker.internet
          .email()
          .toLowerCase()
          .replace(/_/g, ".");

        datas.data[index].maximum_redemption = faker.datatype.number({
          min: 10,
          max: 99,
        });
        datas.data[index].coupon_expiry_date = `${mm}${dd}${yyyy}`;
        datas.data[index].plan = "Yearly";
        datas.data[index].duration = "Forever";
        datas.data[index].total_payment_received = faker.datatype.number({
          min: 1000,
          max: 2000,
        });
        cy.writeFile(dataPath, datas);
      }
    }
  });
}
// Store Object

export function singleStripePromoStoreObj(dataPath, string) {
  cy.checkAndReadFile(dataPath, (err, datas) => {
    if (err) {
      return cy.log(err);
    }
  }).then((datas) => {
    for (let index = 0; index < datas.data.length; index++) {
      if (datas.data[index].environment == string) {
        datas.data[index].coupon_name = datas.data[0].coupon_name;
        datas.data[index].coupon_code = datas.data[0].coupon_code;
        datas.data[index].discount = datas.data[0].discount;
        datas.data[index].percentage_off = datas.data[0].percentage_off;
        datas.data[index].maximum_redemption = datas.data[0].maximum_redemption;
        datas.data[index].coupon_expiry_date = datas.data[0].coupon_expiry_date;
        datas.data[index].plan = datas.data[0].plan;
        datas.data[index].duration = datas.data[0].duration;
        cy.writeFile(dataPath, datas);
      }
    }
  });
}

export function multipleStripePromoStoreObj(dataPath, string) {
  cy.checkAndReadFile(dataPath, (err, datas) => {
    if (err) {
      return cy.log(err);
    }
  }).then((datas) => {
    for (let index = 0; index < datas.data.length; index++) {
      if (datas.data[index].environment == string) {
        datas.data[index].coupon_name = datas.data[0].coupon_code;
        datas.data[index].number_of_coupon = datas.data[0].number_of_coupon;

        datas.data[index].percentage_off = datas.data[0].percentage_off;
        datas.data[index].maximum_redemption = datas.data[0].maximum_redemption;
        datas.data[index].coupon_expiry_date = datas.data[0].coupon_expiry_date;
        datas.data[index].plan = datas.data[0].plan;
        datas.data[index].duration = datas.data[0].duration;
        cy.writeFile(dataPath, datas);
      }
    }
  });
}

export function teamPromoStoreObj(dataPath, string) {
  cy.checkAndReadFile(dataPath, (err, datas) => {
    if (err) {
      return cy.log(err);
    }
  }).then((datas) => {
    for (let index = 0; index < datas.data.length; index++) {
      if (datas.data[index].environment == string) {
        datas.data[index].company_name = datas.data[0].company_name;
        datas.data[index].company_promo_code = datas.data[0].company_promo_code;
        datas.data[index].team_name = datas.data[0].team_name;
        datas.data[index].team_email = datas.data[0].team_name;
        datas.data[index].maximum_redemption = datas.data[0].maximum_redemption;
        datas.data[index].coupon_expiry_date = datas.data[0].coupon_expiry_date;
        datas.data[index].plan = datas.data[0].plan;
        datas.data[index].duration = datas.data[0].duration;
        datas.data[index].total_payment_received =
          datas.data[0].total_payment_received;
        cy.writeFile(dataPath, datas);
      }
    }
  });
}
