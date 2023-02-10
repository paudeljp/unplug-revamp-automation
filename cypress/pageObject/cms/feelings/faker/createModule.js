import { faker } from "@faker-js/faker";

export function fakerObj(dataPath, filePath, string) {
  cy.checkAndReadFile(dataPath, (err, datas) => {
    if (err) {
      return console.error(err);
    }
  })
    .then((datas) => {
      for (let index = 0; index < datas.data.length; index++) {
        if (datas.data[index].environment == string) {
          datas.data[index].title = `+ ${faker.word.adjective()}`;
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
        datas.data[index].title = datas.data[0].title;
        cy.writeFile(dataPath, datas);
        count = index;
      }
    }
  });
}
