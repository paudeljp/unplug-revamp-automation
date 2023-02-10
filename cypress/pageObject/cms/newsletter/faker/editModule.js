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
          datas.data[index].title = Date.now() + " newsletter";
          datas.data[index].start_date = `${mm}${dd}${yyyy}`;
          datas.data[index].end_date = `${mm}${dd}${yyyy}`;
          datas.data[index].thumbnailImage = "../file/cms/5144490.jpg";
          datas.data[index].link = faker.internet.url();
          datas.data[index].description = faker.lorem.sentence();
          datas.data[index].hide = false;
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
          datas.data[index].title = datas.data[0].title;
          datas.data[index].start_date = datas.data[0].start_date;
          datas.data[index].end_date = datas.data[0].end_date;
          datas.data[index].thumbnailImage = datas.data[0].thumbnailImage;
          datas.data[index].link = datas.data[0].link;
          datas.data[index].description = datas.data[0].description;
          datas.data[index].hide = datas.data[0].hide;
          cy.writeFile(dataPath, datas);
        }
      }
    })
    .wait(1000);
}
