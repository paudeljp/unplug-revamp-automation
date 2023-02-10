import { faker } from "@faker-js/faker";
export function fakerObj(dataPath, string) {
  cy.checkFileExists(dataPath, (err, datas) => {
    if (err) {
      return cy.log(err);
    }
  }).then((datas) => {
    for (let index = 0; index < datas.length; index++) {
      if (datas.data[index].environment == string) {
        datas.data[index].title = Date.now() + " timer sound";
        datas.data[index].position = faker.datatype.number({
          min: 10,
          max: 99,
        });
        datas.data[index].uploadTimerVideo =
          "../file/cms/file_example_WAV_1MG.wav";
        cy.writeFile(dataPath, datas);
      }
    }
  });
}

export function storeObj(dataPath, string) {
  cy.checkFileExists(dataPath, () => {
    if (err) {
      return console.error(err);
    }
  }).then((datas) => {
    for (let index = 0; index < datas.length; index++) {
      if ((datas.data[index].environment = string)) {
        datas.data[index].title = datas.data[index].title;
        datas.data[index].position = datas.data[index].position;
        datas.data[index].uploadTimerVideo = datas.data[index].uploadTimerVideo;
        cy.writeFile(dataPath, datas);
      }
    }
  });
}
