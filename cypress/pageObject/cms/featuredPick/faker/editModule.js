import { faker } from "@faker-js/faker";

export function fakerObj(dataPath, string) {
  let date = new Date();

  let yyyy = date.getFullYear();
  let mm = (date.getMonth() + 1).toString().padStart(2, 0);
  let dd = date.getDate().toString().padStart(2, 0);

  cy.checkAndReadFile(dataPath, (err, datas) => {
    if (err) {
      return console.error(err);
    }
  })
    .then((datas) => {
      for (let index = 0; index < datas.length; index++) {
        if (datas.data[index].environment == string) {
          datas.data[index].select_category = "Teacher";
          datas.data[index].select_featured_item = "John Vosler";
          datas.data[index].start_date = `${mm}${dd}${yyyy}`;
          datas.data[index].end_date = `${mm}${dd}${yyyy}`;
          cy.writeFile(dataPath, datas);
        }
      }
    })
    .wait(1000);
}

export function storeObj(dataPath, string) {
  cy.checkAndReadFile(dataPath, (err, datas) => {
    if (err) {
      return console.error(err);
    }
  })
    .then((datas) => {
      for (let index = 0; index < datas.length; index++) {
        if (datas.data[index].environment == string) {
          datas.data[index].select_category = datas.data[0].select_category;
          datas.data[index].select_featured_item =
            datas.data[index].select_featured_item;
          datas.data[index].start_date = datas.data[0].start_date;
          datas.data[index].end_date = datas.data[0].end_date;
          cy.writeFile(dataPath, datas);
        }
      }
    })
    .wait(1000);
}
