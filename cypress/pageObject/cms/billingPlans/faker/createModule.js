import { faker } from "@faker-js/faker";

export function fakerObj(dataPath, string) {
  cy.checkAndReadFile(dataPath, (err, datas) => {
    if (err) {
      return console.error(err);
    }
  })
    .then((datas) => {
      for (let index = 0; index < datas.data.length; index++) {
        if (datas.data[index].environment == string) {
          datas.data[index].planeName = faker.random.word();
          datas.data[index].stripeId = "";
          datas.data[index].amount = "";
          datas.data[index].currency = "";
          datas.data[index].billingPeriod = "";
          datas.data[index].freeTrial = "";
          datas.data[index].status = "1";
          cy.writeFile(dataPath, datas);
        }
      }
    })
    .wait(1000);
}

export function storeObj(dataPath, string, string2) {
  cy.checkAndReadFile(dataPath, (err, datas) => {
    if (err) {
      return console.error(err);
    }
  }).then((datas) => {
    let count = null;
    for (let index = 0; index < datas.data.length; index++) {
      if (datas.data[index].environment == string) {
        datas.data[index].planeName = datas.data[0].planeName;
        datas.data[index].stripeId = datas.data[0].stripeId;
        datas.data[index].amount = datas.data[0].amount;
        datas.data[index].currency = datas.data[0].currency;
        datas.data[index].billingPeriod = datas.data[0].billingPeriod;
        datas.data[index].freeTrial = datas.data[0].freeTrial;
        datas.data[index].status = datas.data[0].status;
        cy.writeFile(dataPath, datas);
        count = index;
      }
    }
  });
}
