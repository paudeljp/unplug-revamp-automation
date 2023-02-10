import { faker } from "@faker-js/faker";

export function storeObj(dataPath, string) {
  cy.checkAndReadFile(dataPath, (err, datas) => {
    if (err) {
      return console.error(err);
    }
  })
    .then((datas) => {
      for (let index = 0; index < datas.data.length; index++) {
        if (datas.data[index].environment == string) {
          datas.data[index].showEntries = "5";
          datas.data[index].search = "sloane mason";
          cy.writeFile(dataPath, datas);
        }
      }
    })
    .wait(1000);
}
