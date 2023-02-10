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
          datas.data[index].user = "";
          datas.data[index].gratefulForFirst = faker.random.word();
          datas.data[index].gratefulForSecond = faker.random.word();
          datas.data[index].gratefulForThird = faker.random.word();
          datas.data[index].notes = faker.lorem.sentence(4);
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
        datas.data[index].user = datas.data[0].user;
        datas.data[index].gratefulForFirst = datas.data[0].gratefulForFirst;
        datas.data[index].gratefulForSecond = datas.data[0].gratefulForSecond;
        datas.data[index].gratefulForThird = datas.data[0].gratefulForThird;
        datas.data[index].notes = datas.data[0].notes;
        cy.writeFile(dataPath, datas);
        count = index;
      }
    }
    for (let index = 0; index < datas.data.length; index++) {
      if (datas.data[index].environment == string2) {
        datas.data[index].searchByEmail = datas.data[count].user;
        cy.writeFile(dataPath, datas);
      }
    }
  });
}
