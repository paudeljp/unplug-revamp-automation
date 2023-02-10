import { faker } from "@faker-js/faker";

export function fakerObj(dataPath, string) {
  cy.checkAndReadFile(dataPath, (err, datas) => {
    if (err) {
      return console.error(err);
    }
  })
    .then((datas) => {
      for (let index = 0; index < datas.length; index++) {
        if (datas.data[index].environment == string) {
          datas.data[index].name = Date.now() + " audio track";
          datas.data[index].position = faker.datatype.number({
            min: 10,
            max: 99,
          });

          datas.data[index].uploadAudioTrackFile1 =
            "../file/cms/file_example_WAV_1MG.wav";
          datas.data[index].uploadAudioTrackFile2 =
            "../file/cms/file_example_WAV_1MG.wav";
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
          datas.data[index].firstName = datas.data[0].firstName;

          datas.data[index].name = datas.data[0].name;
          datas.data[index].position = datas.data[0].position;

          datas.data[index].uploadAudioTrackFile1 =
            datas.data[0].uploadAudioTrackFile1;

          datas.data[index].uploadAudioTrackFile2 =
            datas.data[0].uploadAudioTrackFile2;
          cy.writeFile(dataPath, datas);
        }
      }
    })
    .wait(1000);
}
